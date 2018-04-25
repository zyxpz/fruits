import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/order';
import { Toast } from 'antd-mobile';

// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/order';
import { connect } from 'react-redux';

// 业务组件
import ListTabs from '../../../components/Order/ListTabs';

// 业务组件
import Footer from "../../../components/_commom/Footer/Footer";
class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { orderList, actions, location } = this.props;
		const { type = "0" } = location.query;
		console.log(orderList);
		return (
			<div>
				<ListTabs
					type={type}
					listInfo={orderList}
					actions={actions}
				/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		orderList: state.orderList
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);