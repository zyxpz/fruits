import React, {
	Component
} from 'react';
import {
	Toast
} from 'antd-mobile';
import * as types from '../../../constants/actions/cart';

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

		this.handleClickHide = this.props.handleClickHide; // 关闭弹层
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

	render() {
		const {
			show,
			changeData,
		} = this.props;

		const {
			list
		} = this.state;

		return ( 
			<div> {
				show ? <div className = "g-fixed" >
					<div> 
						{
							this.props.title || 'title'
						} 
						<span onClick = {
							() => {
								this.handleClickHide();
							}
						}> X </span> 
					</div> 
					<ul> {
						list.map((t, i) => ( <li> {
							t.name
						}: < input type = "text"
							name = {
								t.type
							}
							onBlur = {
								this.handleBlur
							}
							value = {
								changeData && changeData[t.type]
							}
							id = {
								changeData && changeData.id
							}
							className = "J-add-revise-ipt" / > </li>
						))
					}
					</ul> 
					<button onClick = {
						this.handleClick
					} > 提交 
					</button> 
				</div> : ''
			} </div>
		);
	}
}

export default PopupDom;