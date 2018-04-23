import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';

let id = 0;
let param = {
	id: (id += 1).toString()
};

class PopupDom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btn: true,
			list: [
				{
					name: '姓名',
					type: 'name'
				},
				{
					name: '电话',
					type: 'name'
				},
				{
					name: '城市',
					type: 'name'
				},
				{
					name: '详细地址',
					type: 'name'
				}
			]
		};

		this.handleClickHide = this.props.handleClickHide; // 关闭弹层
	}

  handleOnChange = e => {
  	console.log(e.target.value);
  	switch (e.target.getAttribute('name')) {
  		case 'name':
  			param.name = e.target.value;
  			break;
  		case 'phone':
  			param.phone = e.target.value;
  			break;
  		case 'city':
  			param.city = '浙江省绍兴市上虞区';
  			break;
  		case 'place':
  			param.place = e.target.value;
  			break;
  		default:
  			break;
  	}
		
  	if (Object.keys(param).length >= 5) {
  		this.setState({
  			param,
  			btn: false
  		});
  	}

  	
  }

  handleClick = (e) => {

  	const {
  		param
  	} = this.state;
		
  	if (param === undefined && Object.keys(param).length < 5) {
  		return;
  	}

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
	
	handleBlur = e => {
		if (e.target.value === '') {
			e.target.style = 'border: solid 1px red';
			e.target.placeholder = '不可为空';
		} else {
			e.target.style = '';
			e.target.placeholder = '';
		}
	}

	render() {
  	const {
			show,
  	} = this.props;
		
  	const {
			btn,
			list
		} = this.state;
		
  	return (
  		<div>
  			{
  				show ? <div className="g-fixed">
  					<div>
  						{this.props.title || 'title'}
  						<span onClick={() => { this.handleClickHide(); }}>X</span>
  					</div>
						
  					{/* <p>姓名: <input type="text" name="name" onChange={this.handleOnChange} onBlur={this.handleBlur} /></p>
  					<p>电话: <input type="phone" name="phone" onChange={this.handleOnChange} onBlur={this.handleBlur} /></p>
  					<p>城市: <input type="text" name="city" onChange={this.handleOnChange} onBlur={this.handleBlur}  /></p>
						<p>详细地址: <input type="text" name="place" onChange={this.handleOnChange} onBlur={this.handleBlur} /></p> */}
						<ul>
							{
								list.map((t, i) => (
									<li>{t.name}:<input type="text" name={t.type} onChange={this.handleOnChange} onBlur={this.handleBlur} /></li>
								))
							}
							
						</ul>
  					<button onClick={this.handleClick} disabled={btn}>提交</button>
  				</div> : ''
  			}
  		</div>
  	);
	}
}

export default PopupDom;
