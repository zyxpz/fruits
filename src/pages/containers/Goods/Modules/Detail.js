import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/detail';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/detail';
import { connect } from 'react-redux'; 
// 业务组件
import Imgs from "../../../components/Goods/Detail/Imgs";
import Info from "../../../components/Goods/Detail/Info";
import Others from "../../../components/Goods/Detail/Others";
import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.loadData(this.props);
	}
	componentWillReceiveProps(nextprops) {
		if (this.props.params.id != nextprops.params.id) {
			this.loadData(nextprops);
		} 
	}
	loadData($props) {
		const { params: { id } } = $props;
		let url = types.DETAIL_MAIN_GET;
		let param = {
			id
		};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
			},
			onError: (res) => {
				Toast.info(res.msg, 1);
			}
		};
		$props.actions.request(url, params, {});
	}
	render() {
		const { detail, actions, params: { id }, location } = this.props;
		const { extension = [], goods = {} } = detail;
		const { pathname } = location;
		const { thumb_pic = [] } = goods;
		return (
			<div>
				<Imgs img={thumb_pic}/>
				<Info goods={goods}/>
				<Others extension={extension}/>
				<Footer pathname={pathname}/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		 detail: state.detail
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch   
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);