import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const conStyle = {
	marginTop: '25%',  
};
class EmptyState extends Component {
	constructor(props, context) {
		super(props);
	}
	render() {
		return (
			<div className="g-tc" style={conStyle}>
				暂无数据！
			</div>
		);
	}
}
export default EmptyState;