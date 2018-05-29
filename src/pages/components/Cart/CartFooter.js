import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/cart';
import { Link } from "react-router";
import { Toast } from "antd-mobile";
const btnStyle = {
	width: 200,
	height: `100%`
};
class Item extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = (event) => {
		this.props.actions.selectChange("all");
	}
	handleSubmit = () => {
		const {
			select_str
		} = this.props;
		if (!select_str) {
			Toast.info("请选择要进行结算的商品！");
			return;
		}
		_global.history.push(`/cart/settlement?id=${select_str}`);
	}
	render() {
		const {
			total,
			is_all_selected,
			select_str,
			itemArr
		} = this.props;
		return (
			<div className="v-cart-footer g-reset g-bb g-b-t">
				{
					itemArr.length > 0 
						?
						<div className="g-flex g-jc-sb g-ai-c g-fs-30" style={{ height: 80 }}>
							<div 
								className="g-pd-l" 
								data-type="all"
								onClick={this.handleClick}
							>
								<i 
									className={classnames("iconfont icon-select g-fs-40", { "g-green": is_all_selected })} 
									style={{ width: 40 }}
								/> 
								<span className="g-m-l">全选</span>
							</div>
							<div className="g-flex g-ai-c" style={{ height: `100%` }}>
								<div className="g-col g-pd-lr">合计：<span className="g-pink">￥{total}</span></div>
								<div 
									onClick={this.handleSubmit}
									className="g-bg-orange g-flex g-ai-c g-jc-c g-white" style={btnStyle}
								>结算</div>
							</div>
						</div>
						:
						null
				}
			</div>
		);
	}

}
export default Item;