import React, { Component } from 'react';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/category';
import { Toast } from 'antd-mobile';
import { Link } from 'react-router';
import Stepper from "../../../components/_commom/Stepper/Stepper";
import Item from './Item';
class RightList extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.loadData(this.props);
	}

	componentWillReceiveProps(nextprops) {
		if (this.props.current_id && this.props.current_id != nextprops.current_id) {
			this.loadData(nextprops);
		}
	}
	loadData(nextprops) {
		const {
			current_id,
			right
		} = nextprops;
		let url = types.CATEGORY_RIGHT_LIST_GET;
		let param = {
			group_category_id: current_id
		};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
			},
			onError: (res) => {
				Toast.info(res.msg, 1.5);
			}
		};
		nextprops.actions.request(url, params, {});
	}
	
	render() {
		const { right, current_id, firstData, category_name, actions } = this.props;
		const list = right[current_id] ? right[current_id].list : firstData;
		return (
			<div 
				className="v-categary-right-list g-reset" 
				style={{ width: `75%`, height: _global.innerHeight - 95, overflow: `auto` }}
			>
				<div>
					<div className="g-pd g-bg-white g-flex g-bb">
						<div className="g-bg-green" style={{ width: 3, height: 33 }}/>
						<div className="g-green g-pd-l">{category_name}</div>
					</div>
					<div>
						{
							list.length == 0 ?
								<div className="g-pd g-tc">暂无数据！</div>
								:
								list.map((item, index) => {
									return (
										<Item
											actions={actions}
											itemData={item}
										/>
									);
								})
						}
					</div>
				</div>
			</div>
		);
	}

}
export default RightList;