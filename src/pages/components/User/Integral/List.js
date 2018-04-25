import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/user';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { list } = this.props;
		return (
			<div className="v-user-integral-list g-reset g-pd">
				<div className="g-flex g-tc g-pd g-bg-gray">
					<div className="g-1of3">交易记录</div>
					<div className="g-1of3">积分</div>
					<div className="g-1of3">备注</div>
				</div>
				{
					list.map((item, index) => {
						const { jifen, annotation, time } = item;
						return (
							<div>
								<div className="g-flex g-tc g-pd">
									<div className="g-1of3">{time}</div>
									<div className="g-1of3">{jifen}</div>
									<div className="g-1of3">{annotation}</div>
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