import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/cart';
import { connect } from 'react-redux'; 
import * as types from '../../../constants/actions/cart';
import { Toast } from 'antd-mobile';
// 业务组件
import List from "../../../components/Cart/List";
import CartFooter from "../../../components/Cart/CartFooter";

import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.CART_MAIN_GET;
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
		const {
			cart,
			actions,
			dispatch
		} = this.props;
		const {
			itemArr,
			itemObj,
			list = [],
			total,
			is_all_selected,
			select_str
		} = cart;
		return (
			<div className="g-bg-white">
				<div style={{ height: _global.innerHeight - 95 }} className="g-flex g-fd-c g-jc-sb">
					<List 
						itemArr={itemArr} 
						itemObj={itemObj} 
						cart={cart} 
						actions={actions} 
					/>
					<CartFooter 
						total={total} 
						actions={actions} 
						is_all_selected={is_all_selected}
						select_str={select_str}
						itemArr={itemArr}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		cart: state.cart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch   
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);