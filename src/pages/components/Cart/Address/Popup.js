import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';

let param = {

};

class PopupDom extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};

		this.handleClickHide = this.props.handleClickHide; // 关闭弹层
	}

  handleOnChange = e => {
  	switch (e.target.getAttribute('name')) {
  		case 'name':
  			param.name = e.target.value;
  			break;
  		case 'phone':
  			param.phone = e.target.value;
  			break;
  		case 'city':
  			param.city = e.target.value;
  			break;
  		case 'place':
  			param.place = e.target.value;
  			break;
  		default:
  			break;
  	}
  	this.setState({
  		param,
  	});
  }

  handleClick = (e) => {

  	const {
  		param
  	} = this.state;

  	let url = types.CART_ADDRESS_ADD_MAIN_GET;

  	let params = {
  		param: param,
  		ajaxType: 'POST',
  		onSuccess: (res) => {
  			Toast.info(res.msg, 1);
  		},
  		onError: (res) => {
  			Toast.info(res.msg, 1);
  		}
  	};

  	this.props.actions.request(url, params, {});

  	this.handleClickHide();
  }

  handleHide = () => {

  	this.handleClickHide();
  }

  render() {
  	const {
  		show
  	} = this.props;

  	return (
  		<div>
  			{
  				show ? <div className="g-fixed">
  					<div>
  						{this.props.title || 'title'}
  						<span onClick={this.handleHide}>X</span>
  					</div>
  					<p>name: <input type="text" name="name" onChange={this.handleOnChange} /></p>
  					<p>电话: <input type="phone" name="phone" onChange={this.handleOnChange} /></p>
  					<p>城市: <input type="text" name="city" onChange={this.handleOnChange} /></p>
  					<p>详细地址: <input type="text" name="place" onChange={this.handleOnChange} /></p>
  					<button onClick={this.handleClick}>提交</button>
  				</div> : ''
  			}
  		</div>
  	);
  }
}

export default PopupDom;
