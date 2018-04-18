/**
 * 全部变量初始化及使用
 */
import ReactDOM from 'react-dom';
import { getItem, setItem, delItem, getCookie, getDevice, parseUrl, getUrlParam, loadCssCode } from '../utils/utils';
typeof window !== "undefined" ? window._global = {} : this._global = {}; // 唯一一个全部变量
/**
 * hack
 * 移动端的延迟 location
 */
_global.tag = false;
/**
 * 环境
 */
_global.env = process.env.NODE_ENV;
/**
 * 缩放比例
 */
_global.scale = 0.5;
/**
 * 全局状态
 */
_global.config = {};
/**
 * 用于缓存的版本的管理
 */
_global.version = "1.4";
/**
 * 记忆滚动
 */
_global.scroll = {};
/**
 * ios中微信支付的坑
 * 获取第一次加载的页面pathname值
 */
_global.landingPage = location.pathname;
/**
 * ios中微信分享的坑
 * 已修复，可以无视
 */
_global.landingSharePage = `${location.origin}${location.pathname}${location.search}`;
/**
 * GUID
 */
_global.GUID = location.host.split(".")[0];
/**
 * APIS组件的清理
 * @return {}     
 */

_global.APIS = {};

/**
 * 设备信息状态
 */
_global.device = getDevice();
_global.innerWidth = _global.scale == 0.5 ? window.innerWidth : window.innerWidth * 2;
_global.innerHeight = _global.scale == 0.5 ? window.innerHeight : window.innerHeight * 2;
// console.log(_global.innerWidth,_global.innerHeight);
_global.initApis = () => {
	for (let i in _global.APIS) {
		// console.log('remove apis:'+i);
		if (_global.APIS[i] && _global.APIS.hasOwnProperty(i)) {
			ReactDOM.unmountComponentAtNode(_global.APIS[i]);
			document.body.removeChild(_global.APIS[i]);
			delete _global.APIS[i];
		}
	}
};

_global.imgPlaceHolder = "http://wx.qlogo.cn/mmopen/1MLz0YkS76H38jmh2IyPHHcgPccbkGrej7iaQ2YbDr1faauBg49H2hBRJPHGdAGkFX5V21xliaMZactkyWVqNl2g/";

// config for text
const { name } = getCookie('distributor_nick_name') || {};
_global.txtConfig = {
	distribName: name || `分享商`
};
// 分享次数
_global.shareCount = 0;