import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/user';
import { Toast } from 'antd-mobile';

// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/user';
import { connect } from 'react-redux';

// 业务组件
import Header from "../../../components/_commom/Header/Header";
import Info from "../../../components/User/Grade/Info";
import Tips from "../../../components/User/Grade/Tips";

import Footer from "../../../components/_commom/Footer/Footer";
class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.USER_GRADE_MAIN_GET;
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
		const { grade: { list = {} }, actions, location } = this.props;
		const { pathname } = location;
		console.log(list, 7);
		return (
			<div>
				<Header nickname={`会员等级`}/>
				<Info info={list}/>
				<Tips />
				<Footer pathname={pathname}/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		grade: state.grade
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);