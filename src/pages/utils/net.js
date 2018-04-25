import API_ROOT from '../constants/apiRoot';
import { DEV_WITH_PHP } from '../constants/constants';
import { Toast } from 'antd-mobile';

let ajax = (options) => {
	let xhr = new XMLHttpRequest();
	let url = options.url;
	let paramObj = options.param;
	let success_cb = options.success;
	let error_cb = options.error;
	let uploadProgress = options.uploadProgress;
	let method = options.type || 'GET';
	let noLoading = options.noLoading;

	method = method.toUpperCase(); // 默认转化为大写
	if (!url) {
		console.error('请求地址不存在');
	}
	!noLoading && Toast.hide();// hack
	// !noLoading && Toasts.hide();// hack
	// !noLoading && Toast.loading(null, 0);
	/**
	 * 因为json-server是rest的接口；本地测试做个判断
	 */
	if (!DEV_WITH_PHP && "production" != process.env.NODE_ENV && method != 'GET') {
		setTimeout(() => {
			let params = {};
			params.data = {
				status: 1
			};
			console.info(`dev:${options.type}`);
			console.log(JSON.stringify(options.param));
			success_cb && success_cb(params.data);
		}, 500);
		return false;
	}

	let cgiSt = Date.now();

	let onDataReturn = data => {
		if (data.status > 0) { // 保留
			success_cb && success_cb(data);
		} else if (data.status === -1) {
			Toast.info(data.msg, 1.5);
		} else if (data.status === -10) { // 代理商需重新登陆
			delCookie('agent');
			Toast.hide();
			Toast.info("登录状态已过期，请重新登录", 1, () => {
				location.href = '/agent-login';
			});
		} else if (data.status === -5) { // 链接失效
			Toast.hide();
			_global.history.replace('/invaild');
		} else if (data.status === -6) { // 链接失效
			Toast.hide();
			Toast.info("请先完成首次进货", 1, () => {
				_global.history.replace('/agent-home');
			});
		} else {
			// -2 重新选择地址
			// 其他
			error_cb && error_cb(data);
		}
	};

	/**
	 * 如果本地已经从别的地方获取到数据，就不用请求了
	 */
	if (options.localData) {
		onDataReturn(options.localData);
		return;
	}

	try {
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					// try {
					let data = JSON.parse(xhr.responseText);
					onDataReturn(data);
					// } catch (e) {
					// 	alert(xhr.responseText);
					// }
				} else {
					error_cb && error_cb({
						retcode: xhr.status,
						msg: '网络不稳定，请稍后重试'
					});
				}
			}
		};

		let paramArray = [],
			paramString = '';
		for (let key in paramObj) {
			/**
			 * 过滤掉值为null,undefined,''情况
			 */
			if (paramObj[key] || paramObj[key] === false || paramObj[key] === 0) {
				paramArray.push(key + '=' + encodeURIComponent(paramObj[key]));
			}
		}

		if (method === 'FORM') {
			let formData = new FormData();
			formData.append('file', paramObj['file']);
			formData.append('bkn', bkn);
			xhr.upload.onprogress = function (e) {
				if (e.lengthComputable) {
					uploadProgress(e.loaded, e.total);
				}
			};
			xhr.open('POST', url);
			// xhr.withCredentials = true;
			xhr.send(formData);
		} else if (method === 'JSONP') {
			method = 'GET';

			if (!paramObj['callback']) {
				error_cb && error_cb({
					status: 0
				});
			}

			window[paramObj['callback']] = function (data) {
				onDataReturn(data);
			};
			if (paramArray.length > 0) {
				url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
			}
			let script = document.createElement("script");
			let head = document.getElementsByTagName("head")[0];
			script.src = url;
			head.appendChild(script);
		} else {
			if (method === 'GET') {
				if (paramArray.length > 0) {
					url += (url.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
				}
			}
			xhr.open(method, url, true);
			// xhr.withCredentials = true;
			// 跨域资源请求会发生两次 一次是204 可以参考cors // 无视就好
			xhr.setRequestHeader(
				'Content-Type', 'application/x-www-form-urlencoded'
			);
			xhr.setRequestHeader(
				'X-Requested-With', 'XMLHttpRequest'
			);
			xhr.send(method === 'POST' ? paramArray.join('&') : '');
		}

	} catch (e) {
		console.error(e);
	}
};
let net = {
	ajax
};

export default net;