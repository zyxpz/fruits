import React, { Component } from 'react';
import Input from '../../../components/_commom/Input/Input';
class Msg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		};
	}
	handleChange = () => {
		let message = event.target.value;
		this.setState({
			message: message
		});
	}
	render() {
		const { message } = this.state;
		return (
			<div
				className="g-m-b-20 g-bg-white"
			>
				<div>
					<Input
						value={message}
						onChange={this.handleChange}
						children="订单留言："
						styleLabel={{ color: '#888' }}
						placeholder={`请输入您的订单留言`}
						maxLength={256}
					/>
				</div>
			</div>
		);
	}
}

export default Msg;