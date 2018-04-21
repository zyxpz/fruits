import React, { Component } from 'react';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/cart';
import { Toast } from 'antd-mobile';
import { Link } from 'react-router';
import Stepper from "../../../components/_commom/Stepper/Stepper";
class Item extends Component {
	constructor(props) {
		super(props);
	}
	handleChange = (val) => {
		const { id } = this.props.itemData; 
		let url = types.CART_COUNT_CHANGE_POST;
		let param = {
			goods_id: id,
			goods_count: val
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
	render() {
		const {
			id,
			goods_name,
			goods_price,
			goods_pic,
			specification,
			goods_count,
			stock,
			month_sale
		} = this.props.itemData || {};
		return (
			<Link 
				className="g-bb g-b-r g-pd g-tc g-flex g-bb"
				data-id={id}
				to={`/goods/detail/${id}`}
			>
				<div style={{ border: `solid 1px #ececec`, width: 140, height: 140 }}>
					<img className="g-img-140" src={goods_pic} alt=""/>
				</div>
				<div className="g-col-2 g-lh-44 g-pd-l g-tl">
					<div className="g-black g-fs-30 g-twoline">{goods_name}</div>
					<div className="g-gray g-fs-24">{specification}</div>
					<div className="g-flex g-jc-sb">
						<div className="g-pink">￥<span className="g-fs-30">{goods_price}</span></div>
						<div>库存：<span className="g-pink">{stock}</span></div>
					</div>
					<div className="g-flex g-jc-sb g-fw-w">
						<div>已售: <span className="g-green">{month_sale}</span> 份</div>
						<Stepper 
							max={stock}
							value={Number(goods_count)}
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</Link>
		);
	}

}
export default Item;