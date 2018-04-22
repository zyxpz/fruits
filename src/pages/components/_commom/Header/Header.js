import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
	}

  handleClick = () => {
  	_global.history.goBack();
  }

  render() {
  	const {
  		nickname = '顶部',
  	} = this.props;
  	return (
  		<div className="v-user-coupon-header g-reset">
  			<div className="g-fixed-content-top">
  				<div className="g-flex g-jc-sb g-bg-white g-pd" style={{ color: `#00ac26` }}>
  					<i onClick={this.handleClick} className="iconfont icon-left" />
  					<div className="g-col g-tc g-lh-44">{nickname}</div>
  				</div>
  			</div>
  			<div style={{ height: 84 }} />
  		</div>
  	);
  }
}

export default Header;