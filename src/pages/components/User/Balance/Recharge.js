import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import { Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/user';
import { Link } from 'react-router';
import { List, Radio, Flex, WhiteSpace, InputItem } from 'antd-mobile';
import Input from '../../../components/_commom/Input/Input';
const RadioItem = Radio.RadioItem;
const btnStyle = {
	width: `60%`,
	height: 70,
	border: `solid 1px #ececec`,
	borderRadius: `35px`,
	background: `#56c16d`,
	color: `#fff`
};
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
			money: ""
		};
	}
	onChange = (value) => {
		this.setState({
			value,
		});
	};
	handleChange = () => {
		let money = event.target.value;
		this.setState({
			money: money
		});
	}
	handleClick = () => {
		let url = types.USER_BALANCE_RECHARGE_POST;
		const { value, money } = this.state;
		if (!money) {
			Toast.info(`请填写充值金额！`, 1);
			return;
		}
		let param = {
			value,
			money
		};
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
	}
	render() {
		const data = [
			// { value: 0, label: '支付宝支付' },
			{ value: 1, label: '微信支付' },
		];
		const { value, money } = this.state;
		return (
			<div className="v-user-balance-rechaarge g-reset g-m-b-20 g-bg-white g-bb">
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>充值方式：</Flex.Item>
					<Flex.Item>
						{
							data.map((item, index) => {
								const { label } = item;
								return (
									<Radio  
										key={index} 
										checked={value === item.value} 
										className="my-radio"
										onChange={() => this.onChange(item.value)}
									>{label}</Radio>
								);
							})
						}
					</Flex.Item>
				</Flex>
				<div>
					<Input
						value={money}
						onChange={this.handleChange}
						children="充值金额："
						styleLabel={{ color: '#888' }}
						placeholder={`请输入充值金额`}
						maxLength={10}
					/>
				</div>
				<div className="g-flex g-jc-c g-ai-c" style={{ height: 200 }}>
					<div 
						className="g-flex g-jc-c g-ai-c" 
						style={btnStyle}
						onClick={this.handleClick}
					>确认充值</div>
				</div>
			</div>
		);
	}

}
export default Header;