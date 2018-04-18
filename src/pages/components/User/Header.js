import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home';
class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-user-header g-reset">
				<div className="g-flex g-fd-c g-jc-c g-ai-c g-bg-lgr-orange-1" style={{height: 320}}>
					<img
						className="g-img-170" 
						src="http://img5.imgtn.bdimg.com/it/u=3965098130,3727948753&fm=27&gp=0.jpg" 
						alt=""
						 style={{borderRadius: `100%`}}
						/>
					<p className="g-fs-40 g-pd">name</p>
				</div>
			</div>
		)
	}

}
export default Header;