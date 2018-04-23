import React, { Component } from 'react';
import { Radio, Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import AddRevise from './AddRevise';


class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: 0,
			btn: true
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.list !== nextProps.list) {
			const {
				list
			} = nextProps;
			list && list.map((t, i) => {
				if (t.status === '1') {
					this.setState({
						checked: 1,
						id: t.id
					});
				}
			});
		}

	}

	// 默认地址选项
	handleOnChange = e => {
		const {
			id,
		} = e.target;
		this.setState({
			checked: 1,
			id,
			btn: false
		});
	}

	// 修改默认地址提交
	handleCommitBtn = () => {
		const {
			id
		} = this.state;
		const {
			list
		} = this.props;
		let url = types.CART_ADDRESS_DEF_PLACE_MAIN_GET;

		let param = {

		};
		list.map(t => {
			if (t.id === id) {
				param = {
					id: t.id
				};
			}
		});

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

	// 删除地址
	handleRemove = e => {
		const id = e.target.getAttribute('id');

		let url = types.CART_ADDRESS_DEL_MAIN_GET;

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
		const {
			list
		} = this.props;
		const arr = list.filter(val => val.id === id);
		
		this.setState({
			reviseList: arr,
		});
	}

	render() {

		const {
			checked,
			id,
			btn,
			reviseList
		} = this.state;
		const {
			list
		} = this.props;

		return (
			<div>
				<ul>
					{
						list && list.map((t, i) => (
							<li
								key={i}
							>
								<Radio
									className="my-radio"
									checked={(checked !== 0) && (t.id === id)}
									onChange={this.handleOnChange}
									id={t.id}
								>
									<span>{t.name}</span>
									<span>{t.phone}</span>
									<span>{t.place}</span>
									<span>{t.city}</span>
									<button id={t.id} onClick={this.handleRemove}>删除</button>
									<button id={t.id} onClick={this.handleRevise}>修改</button>
								</Radio>
							</li>
						))
					}
				</ul>
				<AddRevise
					list={reviseList}
					actions={this.props.actions}
				/>
				<button
					disabled={btn}
					onClick={this.handleCommitBtn}
				>
					确定
				</button>
			</div>
		);
	}
}

export default List;