import React, { Component } from 'react';
import { Link } from 'react-router';
class Info extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { total } = this.props;
		return (
			<div
				className="g-m-b-20 g-bg-white"
			>
				<div 
					className="g-flex g-jc-sb g-black g-bb g-pd"
				>
					<p>商品总价</p>
					<div className="g-orange">￥{total}</div>
				</div>
				<div 
					className="g-flex g-jc-sb g-black g-bb g-pd"
				>
					<p>运费</p>
					<div className="g-orange">￥0.00</div>
				</div>
				<div 
					className="g-flex g-jc-sb g-black g-pd"
				>
					<p>优惠券抵扣</p>
					<div className="g-gray">￥0.00</div>
				</div>
			</div>
		);
	}
}

export default Info;