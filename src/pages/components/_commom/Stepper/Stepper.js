/**
 * 步进器
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Toast } from 'antd-mobile';

import Modal from "../Modals/Modals";
import './Stepper.scss';

class Stepper extends Component {
	constructor(props) {
		super(props);
		this.handleStepperClick = this.handleStepperClick.bind(this);
		this.showInputNumPop = this.showInputNumPop.bind(this);
		this.handleSure = this.handleSure.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}

	componentWillMount() {
		const { value, defaultValue } = this.props;
		this.state = {
			value: !!value ? value : defaultValue
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.props.value) {
			this.setState({ value: nextProps.value });
		}
	}

	/**
	 * 监听增加事件
	 */
	handleAdd(event) {
		const { max, onShouldChange, maxTip } = this.props;
		const { value } = this.state;
		event.preventDefault();
		event.stopPropagation();

		if (onShouldChange('add')) {
			if (!!max || max === 0) {
				if (value < max) {
					this.handleStepperClick( 'add');
				} else {
					Toasts.info(maxTip);
				}
			} else {
				this.handleStepperClick('add');
			}
		}
	}

	/**
	 * 监听减少事件
	 */
	handleMinus(event) {
		const { min, onShouldChange } = this.props;
		const { value } = this.state;
		event.preventDefault();
		event.stopPropagation();

		if (onShouldChange('minus')) {
			value > min ? this.handleStepperClick('minus') : false;
		}
	}

	/**
	 * 步进器+/-按钮点击事件
	 * @param type 点击按钮的类型
	 */
	handleStepperClick(type) {
		const { max, changeTimes, min, onChange } = this.props;
		let value = this.state.value; // value改变前的值

		if (type === 'add') {
			value = this.state.value + changeTimes;

			if (!!max || max === 0) {
				value = value > max ? max : value;
				this.state.value < max ? this.setState({ value }) : null;
			} else {
				this.setState({ value });
			}
		} else {
			value = this.state.value - changeTimes;
			value = value < min ? min : value;
			this.state.value > min ? this.setState({ value }) : null;
		}

		onChange(value);
	}

	/**
	 * 显示购买数量输入弹出框
	 */
	showInputNumPop(event) {
		event.preventDefault();
		event.stopPropagation();
		const { onShouldChange, modalTitle } = this.props;

		Modal.prompt(modalTitle, '', [
			{ text: '取消' },
			{ text: '确认', onPress: (value) => { if (onShouldChange('input', value)) { this.handleSure(value); } } }
		], ['tel']);
	}

	/**
	 * 输入购买数量确定
	 * @param value
	 */
	handleSure(value) {
		const { changeTimes, max, min, onChange, maxTip } = this.props;
		const num = parseInt(value);

		if (isNaN(num)) {
			Toasts.info('请输入数字');
			return;
		} else if ((!!max || max === 0) && value > max) {
			Toasts.info(maxTip);
			return;
		} else if (value < min) {
			Toasts.info('不能少于最少购买数量');
			return;
		} else if (num % changeTimes !== 0) {
			Toasts.info('交换数量不正确，请查看交换说明');
			return;
		}
		this.setState({ value: num });
		onChange(num);
	}

	render() {
		const { min, max, style, btnClassNames, btnActiveStyle, valueStyle, inputEnable, minusBtnClass } = this.props;
		const { value } = this.state;
		return (
			<div className="g-reset g-row c-stepper" style={style}>
				<div
					className={classnames(
						btnClassNames,
						minusBtnClass,
						{
							[btnActiveStyle]: value > min
						}
					)}
					onClick={this.handleMinus}>
					<i
						className={classnames({
							'iconfont': true,
							'icon-minus': true
						})}
					/>
				</div>

				<div
					className={classnames(
						valueStyle,
					)}
					// style={inputEnable ? { border: `solid 1px #e8e8e8`, background: `#f1f1f1` } : {}}
					// onClick={inputEnable ? this.showInputNumPop : null}
				>
					{value}
				</div>

				<div
					className={classnames(
						btnClassNames,
						{
							[btnActiveStyle]: !!max ? value < max : true
						}
					)}
					onClick={this.handleAdd}>
					<i
						className={classnames({
							'iconfont': true,
							'icon-add': true
						})}
					/>
				</div>
			</div>
		);
	}
}

Stepper.propTypes = {
	style: PropTypes.object,
	btnClassNames: PropTypes.string,
	minusBtnClass: PropTypes.string,
	btnActiveStyle: PropTypes.string,
	defaultValue: PropTypes.number,
	value: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	changeTimes: PropTypes.number,			   // 每次加/减的数值，默认为1
	onChange: PropTypes.func,                  // value改变后的回调
	onShouldChange: PropTypes.func,            // 是否可以改变value
	inputEnable: PropTypes.bool,               // 能否手动输入
	modalTitle: PropTypes.string,        // 输入框提示
	maxTip: PropTypes.string,         // 最大值的详细提示
};

Stepper.defaultProps = {
	defaultValue: 0,
	changeTimes: 1,
	min: 0,
	btnClassNames: '_btn',
	btnActiveStyle: '_active',
	valueStyle: '_value',
	inputEnable: true,
	minusBtnClass: '',
	modalTitle: '请输入购买数量',
	maxTip: '超出最大限制数量',
	onChange: () => {
	},
	onShouldChange: () => {
		return true;
	}
};

export default Stepper;
