import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/cart';
const btnStyle = {
	width: 240,
	height: `100%`
};
class Item extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-cart-footer g-reset g-bb g-b-t">
				<div className="g-flex g-jc-sb g-ai-c g-fs-30" style={{ height: 80 }}>
					<div className="g-col g-pd-l">合计：<span className="g-pink">￥3000</span></div>
					<div className="g-bg-orange g-flex g-ai-c g-jc-c" style={btnStyle}>结算(22)</div>
				</div>
			</div>
		);
	}

}
export default Item;