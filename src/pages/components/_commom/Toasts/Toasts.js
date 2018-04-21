/**
 * 借助全局变量_global.APIS增加对路由切换的管理，有且仅存在一个提示框
 */
import React, { Component, createElement, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Toast } from 'antd-mobile';
import './Toasts.scss';
let Dom = document.body;
let ToastsStatics = {};
const leaveTime = 201;
ToastsStatics = {
	/**
	 * 根据antd-mobile的设计改写
	 * 多增加已个options选项
	 * options：{className, style}
	 */
	info(message, duration = 3, onCallback, showClose = true, options = {}) {
		const div = document.createElement('div');
		_global.APIS[`commonToasts`] && Toasts.hide();
		Dom.appendChild(div);
		options = {
			...options,
			message,
			duration: duration == 0 ? 1 * 60 * 60 * 24	 : duration,
			onCallback,
			showClose,
			onCloseSoon: () => {
				ReactDOM.unmountComponentAtNode(div);
				Dom.removeChild(div);
				delete _global.APIS[`commonToasts`];
			},
			onClose: () => {
				options.onCloseSoon();
			},
		};
		_global.APIS[`commonToasts`] = div;
		return ReactDOM.render(<Toasts {...options} />, div);
	},
	fail(message, duration, onCallback, showClose, options = { type: "fail" }) {
		console.error('还未开发');
		return ToastsStatics.info(message, duration, onCallback, showClose, options);
	},
	success(message, duration, onCallback, showClose, options = { type: "success" }) {
		console.error('还未开发');
		return ToastsStatics.info(message, duration, onCallback, showClose, options);
	},
	loading(message, duration, onCallback, showClose, options = { type: "loading" }) {
		console.error('还未开发');
		return ToastsStatics.info(message, duration, onCallback, showClose, options);
	},
	offline(message, duration, onCallback, showClose, options = { type: "offline" }) {
		console.error('还未开发');
		return ToastsStatics.info(message, duration, onCallback, showClose, options);
	},
};
class Toasts extends Component {
	static info = ToastsStatics.info;
	static fail = ToastsStatics.fail;
	static success = ToastsStatics.success;
	static loading = ToastsStatics.loading;
	static offline = ToastsStatics.offline;
	/**
	 * 手动清理全部弹窗
	 */
	static hide = () => {
		if (_global.APIS[`commonToasts`]) {
			ReactDOM.unmountComponentAtNode(_global.APIS[`commonToasts`]);
			delete _global.APIS[`commonToasts`];
		}
	};
	constructor(props) {
		super(props);
		this.handleClose = ::this.handleClose;
		this.handlePress = ::this.handlePress;
	}
	componentWillMount() {
		this.duration = setTimeout(() => {
			// 主线程
			this.handleClose();
		}, Number(this.props.duration) * 1000 - leaveTime);
	}
	componentDidMount() {
	}
	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
		this.duration && clearTimeout(this.duration);
	}
	/**
	 * 给外包暴露方法，只删除自己
	 */
	close() {
		// 主动触发，如果有回调就执行回调
		this && this.props.onCallback && this.props.onCallback();
		// 移除弹窗
		this && this.props.onClose && this.props.onClose();
	}
	handleClose(e){
		e && e.preventDefault();
		e && e.stopPropagation();
		this.refs.fixed.classList.add("__leave");
		this.duration && clearTimeout(this.duration);
		this.timer = setTimeout(() => {
			this.close();
		}, leaveTime);
	}
	handlePress(event, atIndex) {
		// 关闭
		this.handleClose();
	}
	render() {
		const {
			className = "",
			style = {},
			message,
			showClose
		} = this.props;
		return (
			<div className={`common-toast ${className}`} style={{ ...style }}>
				{showClose && <div className="__bg" ref={`bg`} onClick={this.handleClose}/>}
				<div className="__fixed" ref={`fixed`}>
					{message}
				</div>
			</div>
		);
		
	}
}
Toasts.propTypes = {
	// className,
	// style,
	// message,
	// showClose
	// type
};
Toasts.defaultProps = {
};
export default Toasts;

