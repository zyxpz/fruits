import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/user';
import { Toast } from 'antd-mobile';

//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/user';
import { connect } from 'react-redux';

// 业务组件
import Header from '../../../components/User/Header';
import Links from '../../../components/User/Links';
import Info from '../../../components/User/Info';

// 业务组件
import Footer from "../../../components/_commom/Footer/Footer";
class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.USER_MAIN_GET;
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
		const { user, actions } = this.props;
		const { coupon, headimgurl, integral, nickname, remain } = user;
		return (
			<div>
				<Header headimgurl={headimgurl} nickname={nickname} />
				<Links coupon={coupon} integral={integral} remain={remain}/>
				<Info />
				<Footer />
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);