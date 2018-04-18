import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home';
import { Link } from 'react-router';

class Links extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { coupon, integral, remain } = this.props;

		return (
			<div className="v-user-links g-reset g-pd g-m-t-20">
				<div className="g-flex">
					<Link 
						className="g-tc g-m-t-20 g-m-b-20 g-b-r" 
						style={{width: `33.33%`}}
						to=""
					>
						<p className="g-fs-34">积分</p>
						<p className="g-pink g-m-t">{integral}</p>
					</Link>
					<Link 
						className="g-tc g-m-t-20 g-m-b-20 g-b-r" 
						style={{width: `33.33%`}}
						to=""
					>
						<p className="g-fs-34">余额</p>
						<p className="g-pink g-m-t">{remain}</p>
					</Link>
					<Link 
						className="g-tc g-m-t-20 g-m-b-20" 
						style={{width: `33.33%`}}
						to=""
					>
						<p className="g-fs-34">优惠券</p>
						<p className="g-pink g-m-t">{coupon}</p>
					</Link>
				</div>
			</div>
		)
	}

}
export default Links;