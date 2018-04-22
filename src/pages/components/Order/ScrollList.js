import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import * as types from "../../constants/actions/order";
import PullScroll from '../../components/_commom/PullScroll/PullScroll';
import List from './List';
import { Toast } from 'antd-mobile';

class ScrollList extends Component {
	constructor(props, context) {
		super(props, context);
		// 上滑加载
		this.loadDataForScroll = this.loadDataForScroll.bind(this);
		// 下拉刷新
		this.loadDataForPull = this.loadDataForScroll.bind(this, true);
	}

	loadDataForScroll(pullToRefresh = false) {
		console.log(1);
		const { listInfo, type, keyword } = this.props;
		const { currentPage } = listInfo;
		if (listInfo.isEnd > 0 && !pullToRefresh) {
			return false;
		}
		let url = types.ORDER_LIST_MAIN_GET;
		let param = {
			page: pullToRefresh ? 1 : currentPage + 1,
			type,
			keyword: type > 0 ? undefined : keyword // 不是全部这栏不使用搜索
		};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
				pullToRefresh && this.refs.pull && this.refs.pull.setDefault();
			},
			onError: (res) => {
				Toasts.info(res.msg, 1.5);
			}
		};
		this.props.actions.request(url, params, { pullToRefresh });
	}
	render() {
		const { show, type, listInfo, actions, tabs, other } = this.props;
		const { itemArr, itemObj, currentPage, isEnd } = listInfo;
		return (
			<PullScroll
				className="pull-view-wrap"
				wrapper={`.scroll-container-${type}`}
				height={_global.innerHeight - 88}
				loadDataForPull={this.loadDataForPull}
				loadDataForScroll={this.loadDataForScroll}
				isEnd={isEnd}
				itemArr={itemArr}
				currentPage={currentPage}
				show={show} // 总开关 // 默认true
				pull={true} // 允许下拉刷新 默认true
				scroll={true} // 允许上划加载 默认true
				// resetPrvScrollTop //切换过程中判断某个值的不同来置顶
				ref="pull"
			>
				<List 
					actions={actions}
					itemArr={itemArr}
					itemObj={itemObj}
					type={type}
					tabs={tabs}
				/>
			</PullScroll>
		);
	}		
} 
export default ScrollList;