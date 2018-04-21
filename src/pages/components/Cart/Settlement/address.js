import React, { Component } from 'react';

class Address extends Component {
	constructor(props) {
		super(props);
	}

  handleClick = (e) => {
  	_global.history.push(
  		'/cart/settlement/address'
  	);
  }

  render() {
  	return (
  		<div
  			onClick={this.handleClick}
  		>
        添加地址
  		</div>
  	);
  }
}

export default Address;