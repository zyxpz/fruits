import React, { Component } from 'react';
import { Toast, Popup } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import PopupDom from './Popup';


class AddAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

  handleClick = () => {
  	this.setState({
  		show: true
  	});
  }

  handleClickHide = () => {

  	this.setState({
  		show: false
  	});
  }

  render() {
  	const {
  		show
  	} = this.state;
  	return (
  		<div>
  			<button onClick={this.handleClick}>添加更多</button>
  			<PopupDom
  				title="新增地址"
  				show={show}
  				handleClickHide={this.handleClickHide}
  				actions={this.props.actions}
  			/>
  		</div>

  	);
  }
}

export default AddAddress;