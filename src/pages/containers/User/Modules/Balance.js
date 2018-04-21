import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/user';
import { Toast } from 'antd-mobile';

// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/user';
import { connect } from 'react-redux';

// 业务组件
import Header from "../../../components/User/Balance/Header";
import Info from "../../../components/User/Balance/Info";
import Recharge from "../../../components/User/Balance/Recharge";
import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.USER_BALANCE_MAIN_GET;
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
		const { balance: { nickname, balance }, actions, location } = this.props;
		const { pathname } = location;
		return (
			<div>
				<Header />
				<Info nickname={nickname} balance={balance}/>
				<Recharge actions={actions}/>
				<Footer pathname={pathname}/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		balance: state.balance
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);