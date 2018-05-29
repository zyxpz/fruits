import React, { Component } from 'react';
import { Link } from 'react-router';
class Coupon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { total } = this.props;
		return (
			<div
				className="g-m-b-20 g-bg-white g-pd"
			>
				<Link 
					to={`/cart/coupon?total=${total}`}
					className="g-flex g-jc-sb g-black"
				>
					<p>优惠券</p>
					<i className="iconfont icon-right"/>
				</Link>
			</div>
		);
	}
}

export default Coupon;