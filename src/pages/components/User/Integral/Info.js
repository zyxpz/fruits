import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/user';
import { Link } from 'react-router';
class Info extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = () => {
		_global.history.goBack();
	}
	render() {
		const { integral } = this.props;
		return (
			<div className="v-user-integral-info g-reset g-pd g-lh-44">
				<div className="g-fs-28">您当前积分为 <span className="g-green g-fs-32">{integral}</span> 分</div>
				<div className="g-pink g-tr">注：100积分 = 1元</div>
			</div>
		);
	}

}
export default Info;