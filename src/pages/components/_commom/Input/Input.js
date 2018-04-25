/**
 * 说明，必须结合rc-form表单验证使用
 * 比如：
	<Input
		{...getFieldProps('mobile1', {
				validateTrigger: 'onBlur',
				initialValue: '',
				rules: [
					{
						required: true,
						type:"validMobile",
						name:"手机号码",
						validator:dataValidity
					}
				]
			}
		)}
		classNameInput={`g-orange`}
		styleInput={{color:'red'}}
		type={`tel`}
		placeholder={`请填写手机号码`}
		clear
		onKeyUp={this.handleKeyUp}
	>123</Input>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Toast } from 'antd-mobile';
import './Input.scss';
class Input extends Component {
	constructor(props, context) {
		super(props, context);
		// 默认事件修改
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleClick = this.handleClick.bind(this);
		// 自定义
		this.handleClear = this.handleClear.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleRun = this.handleRun.bind(this);
		this.countDown = this.countDown.bind(this);
		this.handleScan = this.handleScan.bind(this);
		this.state = {
			seconds: 60,
			run: false,
			isBlur: true
		};
	}
	componentWillUnmount() {
		this.interval && clearInterval(this.interval);
	}
	/**
	 * 键盘事件
	 */
	handleKeyUp(event) {
		this.props.onKeyUp && this.props.onKeyUp(event);
	}
	/**
	 * 改变
	 */
	handleChange(event) {
		this.props.onChange && this.props.onChange(event);
	}
	/**
	 * ->聚焦
	 */
	handleFocus(event) {
		this.state.isBlur && this.setState({
			isBlur: false
		});
	}
	/**
	 * 聚焦->移除
	 */
	handleBlur(event) {
		event.preventDefault();
		this.props.onBlur && this.props.onBlur(event);
		setTimeout(() => { // 不然会覆盖handleClear事件
			!this.state.isBlur && this.setState({
				isBlur: true
			});
		}, _global.device.touch ? 0 : 150);
	}
	/**
	 * 清楚数据
	 */
	handleSearch(event) {
		// event.preventDefault();
		this.props.onSearch && this.props.onSearch(event);
	}
	/**
	 * 扫一扫
	 */
	handleScan(event) {
		wx.ready(() => {
			wx.scanQRCode({
				needResult: 1,
				scanType: ["qrCode", "barCode"],
				success: (res) => {
					let result = res.resultStr;
					if (result.indexOf(",")) {
						let resultArr = result.split(",");
						result = resultArr[resultArr.length - 1];
					}
					this.props.onScan && this.props.onScan(event, result, res);
				},
				fail: (res) => {
					Toasts.info(res.errMsg);
				}
			});
		});
	}
	/**
	 * 搜索
	 */
	handleClear(event) {
		event.preventDefault();
		this.props.onChange('');
	}
	/**
	 * 开始倒计时
	 */
	handleRun = async () => {
		// onVaild 写法必须是Promise
		// () => {
		// 	return new Promise((resolve, reject) => {
		// 		// resolve("通过")
		// 		// resolve("手机号错误")
		// 	})
		// }
		try {
			this.props.onVaild && await this.props.onVaild();
			this.setState({
				run: true
			});
			this.props.onSms && this.props.onSms();
			this.interval = setInterval(this.countDown, 1000);
		} catch (e) {
			Toasts.info(e);
		}
	}
	/**
	 * 倒计时
	 */
	countDown() {
		if (this.state.seconds > 0 && this.state.seconds <= 60) {
			this.setState({
				seconds: this.state.seconds - 1
			});
		} else {
			clearInterval(this.interval); // 清楚倒计时
			this.setState({
				run: false,
				seconds: 60
			});
		}
	}
	clearRun() {
		this.setState({
			run: false,
			seconds: 60
		});
		this.interval && clearInterval(this.interval);
	}
	/**
	 * 微信 hack
	 * ios的的光标容易飘;
	 * click perventDefault 然后 focus 下可解决;
	 * 别问我为什么;
	 */
	handleClick(event) {
		event.preventDefault();
		event.persist();
		try {
			event.target.focus();
			this.handleFocus(event);
			/**
			 * 传递过来的点击事件
			 */
			this.props.onClick && this.props.onClick(event);
		} catch (e) {
			console.error(e);
		}
	}
	render() {
		const { isBlur, seconds, run } = this.state;
		const {
			children,
			classNameContainer,
			classNameRow,
			styleRow,
			classNameLabel,
			styleLabel,
			classNameInput,
			styleInput,
			maxLength,
			value,
			disabled,
			readonly,
			clear,
			placeholder,
			type,
			onKeyUp,
			onChange,
			onBlur,
			onSms,
			onSearch,
			onScan
		} = this.props;
		return (
			<div
				className={
					classnames(
						("common-input"),
						classNameContainer,
					)
				}
			>
				<div
					className={
						classnames(
							"_row __input",
							{ "__tc": !children },
							classNameRow
						)
					}
					style={styleRow}
				>
					{children &&
						<div
							className={
								classnames(
									"__col-3 __pd-l g-text-over",
									classNameLabel
								)
							}
							style={styleLabel}
						>
							{children}
						</div>
					}

					{
						children && 
						<input
							className={
								classnames(
									{ "__tc __col-10 __col-ml-1 ": !children },
									{ "__col-7": children },
									{ "__col-4": onSms },
									{ "__col-9": onSearch },
									classNameInput
								)
							}
							readOnly={readonly}
							disabled={disabled}
							value={value}
							maxLength={maxLength}
							style={{ height: 40, marginTop: 20, marginBottom: 20, lineHeight: '40px', ...styleInput }}
							type={type}
							placeholder={placeholder}
							onKeyUp={this.handleKeyUp}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
							onClick={this.handleClick}
							onFocus={this.handleFocus}
							ref="input"
						/>
					}

					{
						(clear && value && !isBlur) &&
						<i
							className="__col-1 iconfont icon-close __black"
							onClick={this.handleClear}
						/>
					}

					{
						(onSearch) &&
						<i
							className={
								classnames(
									"iconfont icon-search __black",
									((clear && value && !isBlur) ? "__col-1" : "__col-2 __tc")
								)
							}
							onClick={this.handleSearch}
						/>
					}
					{
						(onScan) &&
						<i
							className={
								classnames(
									"iconfont icon-qrcode __black",
									((clear && value && !isBlur) ? "__col-1" : "__col-2 __tc")
								)
							}
							onClick={this.handleScan}
						/>
					}
					{
						onSms &&
						<div
							style={{ minWidth: 200 }}
							onClick={this.handleRun}
							className={
								classnames(
									"__fr __tc",
									(run ? "__disabled" : "__bg-pink")
								)
							}
						>
							{run ? `剩余${seconds}秒` : `验证码`}
						</div>
					}
				</div>
			</div>
		);
	}
}
Input.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	// 样式
	classNameContainer: PropTypes.string,
	classNameRow: PropTypes.string,
	styleRow: PropTypes.object,
	classNameLabel: PropTypes.string,
	styleLabel: PropTypes.object,
	classNameInput: PropTypes.string,
	styleInput: PropTypes.object,
	// 功能
	clear: PropTypes.bool, // 清楚内容
	disabled: PropTypes.bool, // 清楚内容
	maxLength: PropTypes.number,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	onKeyUp: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onSms: PropTypes.func,
	onSearch: PropTypes.func,
	onScan: PropTypes.func,
	onVaild: PropTypes.func // 必须返回Promise
};
export default Input;