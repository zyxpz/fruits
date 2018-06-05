import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/user';

class List extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = () => {
		_global.history.push( { pathname: `/cart/settlement`, search: `?id=${goods_id}`, state: { address_id: id } });

	}
	render() {
		const { list, total } = this.props;
		return (
			<div className="v-user-coupon-list g-reset">
				{
					list.map((item, index) => {
						const { id, last_time, sale_money, top_money, type_id } = item;
						return (
							<div 
								key={index}
								className="g-pd"
								onClick={total ? this.handleClick : null}
							>
								<div 
									className="g-flex g-bg-white" 
									style={{ height: 150 }}
								>
									<div className="g-lof4 g-tc g-flex g-fd-c g-jc-sa g-pd">
										<div className="g-pink g-fs-28"><span>￥</span>{sale_money}</div>
										<div className="g-fs-22 g-gray">
											满{top_money == "0" ? `任意金额` : `${top_money}元`}可用
										</div>
									</div>
									<div className="g-col g-tc g-flex g-fd-c g-jc-sa g-pd">
										<div className="g-fs-26" style={{ fontWeight: 700 }}>积分红包</div>
										<div className="g-fs-22 g-gray">{last_time}前有效</div>
									</div>
								</div>
							</div>	
						);
					})
				}
			</div>
		);
	}

}
export default List;