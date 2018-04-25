import React, { Component } from 'react';
import propTypes from 'prop-types';
const divStyle = {
	width: 260,
	height: 260,
	border: `solid 1px #ececec`,
	borderRadius: `100%`,
	overflow: `hidden`,
	margin: `0 auto`,
};
class Tips extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-user-grade-tips g-reset g-bg-white g-m-t-20">
				<div className="g-pd g-tc g-fs-30">会员须知</div>
				<div className="g-pd g-gray">
					<p>累计消费总金额</p>
					<p className="g-pd-t-15 g-fs-24">1. 累计消费总金额计算周期为滚动的一年。例如当日为2016年1月1日，计算周期即为2016年1月1日-2017年1月1日为期一年，以此类推；</p>
					<p className="g-pd-t-15 g-fs-24">2. 累计消费总金额为订单实际支付，不包含积分及优惠券的抵充金额；</p>
					<p className="g-pd-t-15 g-fs-24">3. 使用券卡及充值余额购买，不计入积分计算；</p>
					<p className="g-pd-t-15 g-fs-24">4. 累计消费总金额仅限同一ID,不同ID不可累计、转存等。</p>
				</div>
			</div>
		);
	}

}
export default Tips;