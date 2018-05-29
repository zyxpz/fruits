import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/user';
import { Link } from 'react-router';
class Header extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = () => {
		_global.history.goBack();
	}
	render() {
		return (
			<div className="v-user-coupon-header g-reset g-m-b-20">
				<div className="g-fixed-content-top">
					<div className="g-flex g-jc-sb g-bg-white g-pd" style={{ color: `#00ac26` }}>
						<i onClick={this.handleClick} className="iconfont icon-left"/>
						<div className="g-col g-tc g-lh-44">可用优惠券</div>
					</div>
				</div>
				<div style={{ height: 84 }}/>
			</div>
		);
	}

}
export default Header;