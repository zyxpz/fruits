import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/cart';
import Stepper from '../../components/_commom/Stepper/Stepper';
import { Toast } from 'antd-mobile';
class Item extends Component {
	constructor(props) {
		super(props);
	}
	handleChange = (val) => {
		console.log(val);
		const { id } = this.props.itemData; 
		let url = types.CART_COUNT_CHANGE_POST;
		let param = {
			goods_id: id,
			goods_count: val
		};
		let params = {
			param: param,
			ajaxType: 'POST',
			onSuccess: (res) => {
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};
		this.props.actions.request(url, params, {});
	}
	handleDelete = () => {
		const { id } = this.props.itemData; 
		let url = types.CART_COUNT_CHANGE_POST;
		let param = {
			goods_id: id,
		};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};
		this.props.actions.request(url, params, {});
	}
	handleClick = (event) => {
		const { id } = this.props.itemData; 
		console.log(id,88);
		this.props.actions.selectChange("single", id);
	}
	render() {
		const { itemData } = this.props;
		const {
			id,
			goods_name,
			specification,
			stock,
			goods_count,
			goods_price,
			goods_pic,
			status,
			is_selected
		} = itemData;
		return (
			<div 
				className="g-bb g-b-r g-pd g-tc g-flex g-bb"
				data-id={id}
			>	
				
				<div className="g-flex g-ai-c" style={{ width: `100%` }}>
					<i 
						className={classnames("iconfont icon-select g-fs-40 g-m-r", { "g-green": is_selected })}
						style={{ width: 60 }}
						onClick={this.handleClick}
					/>
					<div className="g-col g-flex">
						<div style={{ border: `solid 1px #ececec`, width: 140, height: 140 }}>
							<img className="g-img-140" src={goods_pic} alt=""/>
						</div>
						<div className="g-lh-44 g-pd-l g-tl g-col">
							<div className="g-flex">
								<div className="g-black g-fs-30 g-twoline g-col">{goods_name}</div>
								<div className="g-orange" style={{ width: 60 }}>删除</div>
							</div>
							<div className="g-gray g-fs-24">{specification}</div>
							<div className="g-flex g-jc-sb">
								<div className="g-pink">￥<span className="g-fs-30">{goods_price}</span></div>
								<Stepper 
									max={stock}
									inputEnable={true}
									value={Number(goods_count)}
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Item;