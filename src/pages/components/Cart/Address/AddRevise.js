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

	componentWillReceiveProps(nextProps) {
		if (this.props.list !== nextProps.list) {
			this.setState({
				list: nextProps.list,
				show: true,
				title: '修改地址'
			});
		}
	}

  handleClick = () => {
  	this.setState({
  		show: true,
  		title: '新增地址'
  	});
  }

  handleClickHide = () => {

  	this.setState({
  		show: false
  	});
  }

  render() {
  	const {
  		show,
  		title,
  		list
  	} = this.state;
  	return (
  		<div>
  			<button onClick={this.handleClick}>添加更多</button>
  			<PopupDom
  				title={title}
  				show={show}
  				handleClickHide={this.handleClickHide}
  				actions={this.props.actions}
  				list={list}
  			/>
  		</div>

  	);
  }
}

export default AddAddress;