import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/user';
import { Link } from 'react-router';
const imgStyle = {
	borderRadius: `100%`,
	border: `solid 1px #ececec`,
	overflow: `hidden`
};
class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { balance, nickname } = this.props;
		return (
			<div className="v-user-balance-info g-reset g-m-b-20">
				<div className="g-flex g-pd g-jc-sb g-ai-c">
					<div>{nickname}</div>
					<div 
						style={imgStyle}
					>
 						<img className="g-img-80" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1524109567&di=e51283392bf78f20182b8a27c2a17479&src=http://www.goumin.com/attachments/photo/0/0/89/22859/5851930.jpg" alt=""/>
					</div>
				</div>
				<div className="g-bg-white g-pd g-lh-44 g-gray">
					您当前余额为 <span className="g-green g-fs-30">{balance}</span> 元
				</div>
			</div>
		);
	}

}
export default Header;