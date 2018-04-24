import React, { Component } from 'react';
import { Toast, Popup } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import PopupDom from './Popup';


class AddAddress extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	handleClick = () => {
		this.props.actions.popupShowOrHide({
			title: '新增地址',
			show: true,
		});
	}

	handleClickHide = () => {
		this.props.actions.popupShowOrHide({
			show: false,
			changeData: {}
		});
	}

	render() {

  	return (
  		<div>
  			<button onClick={this.handleClick}>添加更多</button>
  			<PopupDom
  				handleClickHide={this.handleClickHide}
					{...this.props}
  			/>
  		</div>

  	);
	}
}

export default AddAddress;