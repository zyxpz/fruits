import React, { Component } from 'react';
import propTypes from 'prop-types';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/cart';
import Stepper from '../../components/_commom/Stepper/Stepper';
import Item from './Item';
class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { itemArr, itemObj, actions } = this.props;
		return (
			<div className="v-cart-item g-reset" style={{ height: _global.innerHeight - 95 - 80, overflow: `auto` }}>
				{
					itemArr.length > 0 
						?
						itemArr.map((item, index) => {
							return (
								<Item 
									key={index}
									itemArr={itemArr}
									itemData={itemObj[item] || {}}
									actions={actions}
								/>
							);
						})
						:
						<div>购物车空空如也，去采购！</div>
				}
			</div>
		);
	}

}
export default List;