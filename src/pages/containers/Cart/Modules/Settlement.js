import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/cart';
import { connect } from 'react-redux'; 
import * as types from '../../../constants/actions/cart';
import { Toast } from 'antd-mobile';
// 业务组件
// import Item from "../../../components/Cart/Item";
// import CartFooter from "../../../components/Cart/CartFooter";

import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.CART_SETTLEMENT_MAIN_GET;
		let param = {};
		let params = {
			param: param,
			ajaxType: 'GET',
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
		// const { cart, actions, dispatch } = this.props;
		return (
			<div className="g-bg-white">
				123
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		settlement: state.settlement
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch   
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);