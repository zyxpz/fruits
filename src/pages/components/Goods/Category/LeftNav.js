import React, { Component } from 'react';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/category';
const bgStyle = {
	background: `#fff`
}
class LeftNav extends Component {
	constructor(props) {
		super(props);
	}
	
	handleClick = (event) => {
		const $this = event.currentTarget;
		const id = $this.getAttribute("data-id");
		this.props.actions.categoryChange(id);
	}
	render() {
		const { left, current_id } = this.props;
		const { itemArr, itemObj } = left;
		return (
			<div className="v-categary-left-nav g-reset" 
			style={{width: `25%`, height: _global.innerHeight - 95, overflow: `auto` }}>
				<div className="g-flex g-fd-c">
					{
						itemArr.map((item, index) => {
							const { goods_category_id, categroy_name } = itemObj[item];
							return (
								<div 
									key={index}
									className="g-bb g-b-r g-pd g-tc g-bg-gray-1 g-lh-44 g-fs-28"
									data-id={goods_category_id}
									onClick={this.handleClick}
									style={current_id == goods_category_id ? bgStyle : null }
								>{categroy_name}</div>
							);
						})
					}
				</div>
			</div>
		)
	}

}
export default LeftNav;