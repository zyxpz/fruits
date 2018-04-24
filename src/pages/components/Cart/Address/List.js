import React, { Component } from 'react';
import { Radio, Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import AddRevise from './AddRevise';


class List extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}
	
	// 默认地址选项
	handleOnChange = e => {
		const {
			id,
		} = e.target;
		this.props.actions.changeInputRadio(id);
	}

	// 修改默认地址提交
	handleCommitBtn = () => {
		const {
			id
		} = this.props;
		let url = types.CART_ADDRESS_DEF_PLACE_MAIN_POST;
		
		let param = {
			id
		};

		let params = {
			param: param,
			ajaxType: 'POST',
			onSuccess: (res) => {
				Toast.info(res.msg, 1);
				_global.history.goBack();
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};

		this.props.actions.request(url, params, {});
	}

	// 删除地址
	handleRemove = e => {
		const id = e.target.getAttribute('id');

		let url = types.CART_ADDRESS_DEL_MAIN_POST;

		let param = {
			id,
		};
		let params = {
			param: param,
			ajaxType: 'POST',
			onSuccess: (res) => {
				Toast.info(res.msg, 1);
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};

		this.props.actions.request(url, params, {});
	}

	// 修改地址
	handleRevise = e => {
		const id = e.target.getAttribute('id');
		this.props.actions.changeAddress({ id });
	}

	render() {
		const {
			list,
			actions,
			defaultBtn
		} = this.props;

		return (
			<div className="g-flex">
				<ul>
					{
						list && list.map((t, i) => (
							<li
								key={i}
							>
								<Radio
									className="my-radio"
									checked={t.checked}
									onChange={this.handleOnChange}
									id={t.id}
								>
									<span>{t.name}</span>
									<span>{t.phone}</span>
									<span>{t.place}</span>
									<span>{t.city}</span>
									<button id={t.id} onClick={this.handleRemove}>删除</button>
									&nbsp;&nbsp;&nbsp;
									<button id={t.id} onClick={this.handleRevise}>修改地址</button>
								</Radio>
							</li>
						))
					}
				</ul>
				<button
					onClick={this.handleCommitBtn}
				>
					确定
				</button>
			</div>
		);
	}
}

export default List;