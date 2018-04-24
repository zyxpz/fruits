import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/cart';
import { connect } from 'react-redux';
import * as types from '../../../constants/actions/cart';
import { Toast } from 'antd-mobile';
// 业务组件
import Header from "../../../components/_commom/Header/Header";
import List from "../../../components/Cart/Address/List";

import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.CART_ADDRESS_MAIN_GET;
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
		return (
			<div className="g-bg-white">
				<Header
					nickname="管理收货地址"
				/>
				<List
					{...this.props.address}
					actions={this.props.actions}
				/>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		address: state.address
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);