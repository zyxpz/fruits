import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/cart';
import Stepper from '../../components/_commom/Stepper/Stepper';
const list = [
	{
		"id": "59",
		"goods_name": "巨峰葡萄一箱",
		"specification": "每箱约重8斤",
		"stock": "88",
		"goods_count": "2",
		"goods_pic": "http://api.sunlightfruit.com/Public/Upload/Admin/Goods/2017-09-26/59ca50eebb5c0.jpg",
		"goods_price": "50.00",
		"status": "1"
	}
];
class Item extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-cart-item g-reset">
				{
					list.map((item, index) => {
						const { id, goods_name, specification, stock, goods_count, goods_price, goods_pic, status } = item;
						return (
							<div 
								key={index}
								className="g-bb g-b-r g-pd g-tc g-flex g-bb"
								data-id={id}
							>
								<div style={{ border: `solid 1px #ececec`, width: 140, height: 140 }}>
									<img className="g-img-140" src={goods_pic} alt=""/>
								</div>
								<div className="g-col-2 g-lh-44 g-pd-l g-tl">
									<div className="g-black g-fs-30 g-twoline">{goods_name}</div>
									<div className="g-gray g-fs-24">{specification}</div>
									<div className="g-flex g-jc-sb">
										<div className="g-pink">￥<span className="g-fs-30">{goods_price}</span></div>
										<Stepper 
											max={stock}
										/>
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}

}
export default Item;