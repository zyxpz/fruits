import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/category';

class RightList extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.loadData(this.props);
	}

	componentWillReceiveProps(nextprops) {
		if(this.props.current_id && this.props.current_id != nextprops.current_id) {
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
				// Toasts.info(res.msg, 1.5);
			}
		};
		nextprops.actions.request(url, params, {});
	}
	render() {
		const { right, current_id, firstData } = this.props;
		const list = right[current_id] ? right[current_id].list : firstData
		return (
			<div 
				className="v-categary-right-list g-reset" 
				style={{width: `75%`, height: _global.innerHeight - 95, overflow: `auto` }}
			>
				<div>
					{
						list.map((item, index) => {
							const {
								id,
								goods_name,
								goods_price,
								goods_pic,
								specification,
								goods_count,
								stock,
								month_sale
							} = item;
							return (
								<div 
									key={index}
									className="g-bb g-b-r g-pd g-tc g-flex"
									data-id={id}
								>
									<div style={{border: `solid 1px #ececec`, width: 140, height: 140 }}>
										<img className="g-img-140" src={goods_pic} alt=""/>
									</div>
									<div className="g-col-2 g-lh-44 g-pd-l g-tl">
										<div className="g-black g-fs-30 g-twoline">{goods_name}</div>
										<div className="g-gray g-fs-24">{specification}</div>
										<div className="g-flex g-jc-sb">
											<div>单价：{goods_price}</div>
											<div>库存：<span className="g-pink">{stock}</span></div>
										</div>
										<div>月销售:<span>{month_sale}</span>份</div>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>
		)
	}

}
export default RightList;