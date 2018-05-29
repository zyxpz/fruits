import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/cart';
import { connect } from 'react-redux';
import * as types from '../../../constants/actions/cart';
import { Toast } from 'antd-mobile';
// 业务组件
import Header from '../../../components/Cart/Coupon/Header';
import List from '../../../components/Cart/Coupon/List';
import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { location: { query } } = this.props;
		const { total } = query;
		let url = types.CART_COUPON_MAIN_GET;
		let param = {
			total
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
		const { cartCoupon, actions, location: { query } } = this.props;
		const { total } = query;
		const { list = [] } = cartCoupon;
		return (
			<div style={{ height: _global.innerHeight - 95 }}>
				<Header />
				<List list={list}/>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		cartCoupon: state.cartCoupon
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);