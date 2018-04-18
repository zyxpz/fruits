import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/category';
const list = [
	{
		"goods_category_id": "1",
		"categroy_name": "限时抢购"
	},
	{
		"goods_category_id": "2",
		"categroy_name": "热销区"
	},
	{
		"goods_category_id": "3",
		"categroy_name": "新品区"
	},
	{
		"goods_category_id": "4",
		"categroy_name": "鲜果区"
	},
	{
		"goods_category_id": "5",
		"categroy_name": "零食区"
	},
	{
		"goods_category_id": "6",
		"categroy_name": "礼盒区"
	}
];
class LeftNav extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.CATEGORY_LEFT_NAV_GET;
		let param = {};
		let params = {
			param: param,
			ajaxType: 'GET',
			onSuccess: (res) => {
				console.log("true");
			},
			onError: (res) => {
				console.log("error");
			}
		};
		this.props.actions.request(url, params, {});
	}
	handleClick = (event) => {
		const $this = event.currentTarget;
		const id = $this.getAttribute("data-id");
		console.log(id, 8);
	}
	render() {
		return (
			<div className="v-categary-left-nav g-reset" style={{width: `25%`}}>
				<div className="g-flex g-fd-c">
					{
						list.map((item, index) => {
							const { goods_category_id, categroy_name } = item;
							return (
								<div 
									key={index}
									className="g-bb g-b-r g-pd g-tc g-bg-gray-1 g-lh-44"
									data-id={goods_category_id}
									onClick={this.handleClick}
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