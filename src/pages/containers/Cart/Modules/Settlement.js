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
import Address from "../../../components/Cart/Settlement/Address";
import Goods from "../../../components/Cart/Settlement/Goods";
import Pay from "../../../components/Cart/Settlement/Pay";
import Coupon from "../../../components/Cart/Settlement/Coupon";
import Info from "../../../components/Cart/Settlement/Info";
import Msg from "../../../components/Cart/Settlement/Msg";
import Submit from "../../../components/Cart/Settlement/Submit";


import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { settlement, actions, location } = this.props;
		const { query, state = {} } = location;
		console.log(location, state,88888);
		const { address_id = "", coupon_id = "" } = state;
		const { id } = query;
		let url = types.CART_SETTLEMENT_MAIN_GET;
		let param = {
			goods_id: id,
			address_id,
			coupon_id
		};
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
		const { settlement, actions, location, location: { query, state } } = this.props;
		const { id } = query;
		const { list = [], total = 0 } = settlement;
		return (
			<div style={{ height: _global.innerHeight - 95 }}>
				<Header
					nickname="结算"
				/>
				<div className="g-flex g-fd-c g-jc-sb" style={{ height: _global.innerHeight - 95 - 84 }}>
					<div>
						<Address id={id}/>
						<Goods list={list}/>
						<Pay />
						<Coupon total={total} id={id} />
						<Info total={total}/>
						<Msg /> 
					</div>
					<Submit total={total}/>
				</div>
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