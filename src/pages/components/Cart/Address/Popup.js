import React, {
	Component
} from 'react';
import {
	Toast
} from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import Input from '../../../components/_commom/Input/Input';
import { createForm } from 'rc-form';
const btnStyle = {
	width: `60%`,
	height: 70,
	border: `solid 1px #ececec`,
	borderRadius: `35px`,
	background: `#56c16d`,
	color: `#fff`,
	margin: `50px auto`
};
@createForm({
	wrappedComponentRef: true
})
class PopupDom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btn: true,
			list: [{
				name: '姓名',
				type: 'name'
			},
			{
				name: '电话',
				type: 'phone'
			},
			{
				name: '城市',
				type: 'city'
			},
			{
				name: '详细地址',
				type: 'place'
			}
			]
		};
	}
	handleOnChange = () => {
		const ipts = document.querySelectorAll('.J-add-revise-ipt');
		let param = {};
		let arr = [];
		for (let i = 0, len = ipts.length; i < len; i++) {
			const ele = ipts[i];
			arr.push(ele);
		}

		arr.map(t => {

			switch (t.getAttribute('name')) {
				case 'name':
					param.name = t.value;
					if (param.name === '') {
						t.style = 'border: solid 1px red';
						t.placeholder = '不可为空';
						return;
					}
					break;
				case 'phone':
					param.phone = t.value;
					if (param.phone === '') {
						t.style = 'border: solid 1px red';
						t.placeholder = '不可为空';
						return;
					}
					break;
				case 'city':
					param.city = t.value;
					if (param.city === '') {
						t.style = 'border: solid 1px red';
						t.placeholder = '不可为空';
						return;
					}
					break;
				case 'place':
					param.place = t.value;
					if (param.place === '') {
						t.style = 'border: solid 1px red';
						t.placeholder = '不可为空';
						return;
					}
					break;
				default:
					break;
			}
			if (t.getAttribute('id')) {
				param.id = t.getAttribute('id');
			}
		});

		return param;
	}

	handleClick = (e) => {

		let url = types.CART_ADDRESS_ADD_MAIN_POST;

		for (const k in this.handleOnChange()) {
			if (this.handleOnChange()[k] === '') {
				return;
			}
		}

		let params = {
			param: this.handleOnChange(),
			ajaxType: 'POST',
			onSuccess: (res) => {
				Toast.info(res.msg, 1);
				/**
				 * 添加完新地址，重新调查询接口
				 * 会避免重新刷新页面那种闪现
				 */
				url = types.CART_ADDRESS_MAIN_GET;
				params = {
					ajaxType: 'GET',
				};
				this.props.actions.request(url, params, {});
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};

		this.props.actions.request(url, params, {});

		this.handleClickHide();
	}

	handleBlur = e => {
		if (e.target.value === '') {
			e.target.style = 'border: solid 1px red';
			e.target.placeholder = '不可为空';
		} else {
			e.target.style = '';
			e.target.placeholder = '';
		}
	}

	handleChange = () => {
	}
	handleSubmit = () => {
		this.props.form.validateFields((errors, value) => {
			if (errors) {
				for (let i in errors) {
					if (errors[i]) {
						Toasts.info(errors[i].errors[0].message);
						break;
					}
				}
				return false;
			}
			let url = types.CART_ADDRESS_ADD_MAIN_POST;
			for (const k in this.handleOnChange()) {
				if (this.handleOnChange()[k] === '') {
					return;
				}
			}
			let params = {
				param: value,
				ajaxType: 'POST',
				onSuccess: (res) => {
					Toast.info(res.msg, 1);
					this.props.onClick();
					/**
					 * 添加完新地址，重新调查询接口
					 * 会避免重新刷新页面那种闪现
					 */
					url = types.CART_ADDRESS_MAIN_GET;
					params = {
						ajaxType: 'GET',
					};
					this.props.actions.request(url, params, {});
				},
				onError: (res) => {
					Toast.info(res.msg, 1);
				}
			};

			this.props.actions.request(url, params, {});
		});
	}
	render() {
		const {
			show,
			changeData,
			title,
			onClick
		} = this.props;
		const {
			getFieldProps
		} = this.props.form;
		const {
			list
		} = this.state;
		if (!show) return null;
		return ( 
			<div> 
				<div className="g-bg-fixed" onClick={onClick}></div>
				<div className = "g-fixed" >
					<div className="g-flex g-jc-sb g-pd g-black"> 
						<div className="g-col g-tc">
							{
								this.props.title || 'title'
							} 
						</div>
						<i 
							className="iconfont icon-close"
							onClick = {onClick}>  
						</i> 
					</div> 
					{
						list.map((t, i) => { 
							return (
								<Input
									{...getFieldProps(t.type, {
										validateTrigger: 'onBlur',
										initialValue: "",
										// rules: [{
										// 	required: true,
										// 	type: "validMobile",
										// 	name: "手机号码",
										// 	validator: dataValidity
										// }]
									}
									)}
									children={t.name}
									styleLabel={{ color: '#888' }}
									placeholder={`请输入您的${t.name}`}
									maxLength={256}
								/>
							);
						})
					}
					<div className="g-flex-cc">
						<div 
							style={btnStyle}
							className="g-flex-cc"
							onClick = {
								this.handleSubmit
							}
						>
						提交 
						</div> 
					</div>
				</div> 
			</div>
		);
	}
}

export default PopupDom;