import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home';
class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { headimgurl, nickname } = this.props;
		return (
			<div className="v-user-header g-reset">
				<div className="g-flex g-fd-c g-jc-c g-ai-c g-bg-lgr-orange-1" style={{ height: 320 }}>
					<img
						className="g-img-170" 
						src={headimgurl} 
						alt=""
						style={{ borderRadius: `100%` }}
					/>
					<p className="g-fs-40 g-pd">{nickname}</p>
				</div>
			</div>
		);
	}

}
export default Header;