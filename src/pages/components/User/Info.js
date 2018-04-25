import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home';
import { Link } from 'react-router';
const bgStyle = {
	width: 100,
	height: 100,
	borderRadius: `10px`,
	margin: `auto`,
	display: `flex`,
	alignItems: `center`,
	justifyContent: `center`,
};
const list = [
	{
		bg: `g-bg-pink`,
		url: "/order/list",
		icon: "icon-order?type=0",
		title: "我的订单"
	},
	{
		bg: `g-bg-purple`,
		url: "/",
		icon: "icon-wait-evaluate",
		title: "待评价"
	},
	{
		bg: `g-bg-orange`,
		url: "/user/grade",
		icon: "icon-grade",
		title: "会员等级"
	},
	{
		bg: `g-bg-green`,
		url: "/",
		icon: "icon-gift",
		title: "我的赠品"
	},
	{
		bg: `g-bg-blue`,
		url: "/",
		icon: "icon-privilege",
		title: "我的特权"
	},
	{
		bg: `g-bg-blue-1`,
		url: "/",
		icon: "icon-shichi",
		title: "我的试吃"
	},
];
class Info extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-user-info g-reset g-pd-t <g-pd-b></g-pd-b>">
				<div className="g-flex g-fw-w">
					{
						list.map((item, index) => {
							const { url, title, icon, bg } = item;  
							return (
								<Link 
									key={index}
									className="g-tc g-pd-t g-pd-b g-b-r g-bb" 
									style={{ width: `33.33%` }}
									to={url}
								>
									<div className={bg} style={bgStyle}>
										<i className={`iconfont g-fs-70 ${icon}`}/>
									</div>
									<p className="g-gray g-m-t">{title}</p>
								</Link>
							);
						})
					}
				</div>
			</div>
		);
	}

}
export default Info;