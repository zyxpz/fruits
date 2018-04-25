import React, { Component } from 'react';
import { Toast, Popup } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';
import PopupDom from './Popup';


class AddAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleClick = () => {
		this.props.actions.popupShowOrHide({
			title: "新增地址",
			show: !this.props.show
		});
	}
	render() {
		return (
			<div>
				<div
					className="g-flex-cc g-pd g-bg-green"
					onClick={this.handleClick}
				>新增地址+</div>
				<PopupDom
					onClick={this.handleClick}
					actions={this.props.actions}
					{...this.props}
				/>
			</div>
		);
	}
}

export default AddAddress;