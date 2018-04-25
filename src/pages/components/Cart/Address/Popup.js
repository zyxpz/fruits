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
				name: '详细地址',
				type: 'place'
			},
			{
				type: 'id'
			}
			]
		};
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

			let params = {
				param: value,
				ajaxType: 'POST',
				onSuccess: (res) => {
					Toast.info(res.msg, 1);
					this.props.onClick();
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
				<div className="g-fixed" >
					<div className="g-flex g-jc-sb g-pd g-black">
						<div className="g-col g-tc">
							{
								this.props.title || 'title'
							}
						</div>
						<i
							className="iconfont icon-close"
							onClick={onClick}>
						</i>
					</div>
					{
						list.map((t, i) => {
							return (
								<Input
									{...getFieldProps(t.type, {
										validateTrigger: 'onBlur',
										initialValue: changeData && changeData[t.type],
										// rules: [{
										// 	required: true,
										// 	type: "validMobile",
										// 	name: "手机号码",
										// 	validator: dataValidity
										// }]
									}
									)}
									children={t.name ? t.name : null}
									styleLabel={{ color: '#888' }}
									placeholder={t.name ? `请输入您的${t.name}` : null}
									maxLength={256}
								/>
							);
						})
					}
					<div className="g-flex-cc">
						<div
							style={btnStyle}
							className="g-flex-cc"
							onClick={
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