import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/user';
import { Toast } from 'antd-mobile';

//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/user';
import { connect } from 'react-redux';

// 业务组件
import Header from "../../../components/User/Coupon/Header";
import List from "../../../components/User/Coupon/List";
import Footer from "../../../components/_commom/Footer/Footer";
class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.USER_COUPON_GET;
		let param = {};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};
		this.props.actions.request(url, params, {});
	}
	render() {
		const { coupon, actions, location } = this.props;
		const { pathname } = location;
		const { list } = coupon;
		return (
			<div>
				<Header />
				<List list={list}/>
				<Footer pathname={pathname}/>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		coupon: state.coupon
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);