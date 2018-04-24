import React, { Component } from 'react';
import { Radio, Toast } from 'antd-mobile';
import classnames from 'classnames';
import * as types from '../../../constants/actions/cart';
import AddRevise from './AddRevise';

const btnStyle = {
	width: `60%`,
	height: 70,
	border: `solid 1px #ececec`,
	borderRadius: `35px`,
	background: `#56c16d`,
	color: `#fff`,
	margin: `50px auto`
};
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
			<div>
				<ul>
					{
						list && list.map((t, i) => (
							<li
								key={i}
								className="g-flex g-ai-c g-pd g-m-b-20 g-bg-white"
							>
								<i 
									className={classnames("iconfont icon-select g-fs-40 g-m-r", { "g-green": t.checked })}
									style={{ width: 60 }}
									onClick={this.handleOnChange}
									id={t.id}
								/>
								<div className="g-col g-flex g-ai-c">
									<div className="g-col">
										<p className="g-pd-b g-gray">收货人：{t.name}&nbsp;&nbsp; <span className="g-green">{t.phone}</span></p>
										<div className="g-gray">
											<span>地址：浙江省绍兴市上虞区{t.place}</span>
										</div>
									</div>
									<div>
										<i className="iconfont icon-delete" id={t.id} onClick={this.handleRemove} />
										<span className="g-pd-lr">|</span>
										<i className="iconfont icon-edit" id={t.id} onClick={this.handleRevise} />
									</div>
								</div>
							</li>
						))
					}
				</ul>
				<div className="g-flex-cc">
					<div
						style={btnStyle}
						className="g-flex-cc"
						onClick={this.handleCommitBtn}
					>
						确定
					</div>
				</div>
			</div>
		);
	}
}

export default List;