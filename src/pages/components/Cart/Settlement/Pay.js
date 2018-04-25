import React, { Component } from 'react';
import { List, Radio, Flex, WhiteSpace, InputItem } from 'antd-mobile';

class Pay extends Component {
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
	render() {
		const data = [
			{ value: 1, label: '微信支付' },
		];
		const { value } = this.state;

		return (
			<div
				className="g-m-b-20 g-bg-white"
			>
				<Flex style={{ padding: '0.3rem' }}>
					<Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>支付方式：</Flex.Item>
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
			</div>
		);
	}
}

export default Pay;