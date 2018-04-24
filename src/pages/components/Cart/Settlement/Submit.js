import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from "react-router";
import { Toast } from "antd-mobile";
const btnStyle = {
	width: 200,
	height: `100%`
};
class Submit extends Component {
	constructor(props) {
		super(props);
	}
	handleSubmit = () => {
		
	}
	render() {
		const { total } = this.props;
		return (
			<div className="g-reset g-bg-white">
				<div className="g-flex g-jc-sb g-ai-c g-fs-30" style={{ height: 80 }}>
					<div className="g-col g-pd-lr"><span className="g-pink">￥{total}</span></div>
					<div 
						onClick={this.handleSubmit}
						className="g-bg-orange g-flex g-ai-c g-jc-c g-white" style={btnStyle}
					>提交订单</div>
				</div>
			</div>
		);
	}

}
export default Submit;