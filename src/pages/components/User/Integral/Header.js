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
			<div className="v-user-integral-header g-reset g-lh-44 g-fs-32">
				<div className="g-fixed-content-top">
					<div className="g-flex g-jc-sb g-bg-white g-pd" style={{ color: `#00ac26` }}>
						<i onClick={this.handleClick} className="iconfont icon-left"/>
						<div className="g-col g-tc">我的积分</div>
						<Link
							to="/"
						>兑换</Link>
					</div>
				</div>
				<div style={{ height: 84 }}></div>
			</div>
		);
	}

}
export default Header;