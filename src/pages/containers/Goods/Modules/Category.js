import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as types from '../../../constants/actions/category';
import { Toast } from 'antd-mobile';
// redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/category';
import { connect } from 'react-redux'; 
// 业务组件
import Header from "../../../components/Goods/Category/Header";
import LeftNav from "../../../components/Goods/Category/LeftNav";
import RightList from "../../../components/Goods/Category/RightList";
import Footer from "../../../components/_commom/Footer/Footer";

class Container extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		if (!this.props.category.left.isFetching) {
			let url = types.CATEGORY_LEFT_NAV_GET;
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
	}
	render() {
		const { category, actions, dispatch } = this.props;
		const { left, right, current_id, firstData, category_name } = category;
		return (
			<div>
				{/*<Header home={home} actions={actions} dispatch={dispatch}/>*/}
				<div className="g-flex g-bg-white" style={{ hieght: _global.innerHeight - 94 }}>
					<LeftNav 
						left={left} 
						current_id={current_id} 
						actions={actions}
					/>
					<RightList 
						right={right} 
						current_id={current_id} 
						firstData={firstData} 
						category_name={category_name}
						actions={actions}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		category: state.category
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch),
		dispatch   
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);