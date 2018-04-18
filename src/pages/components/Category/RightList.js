import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/category';
const list = [
	{
		"id": "53",
		"goods_name": "苹果",
		"goods_pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523893375920&di=31202166a49cd1dc7a0e26e0d4445b03&imgtype=0&src=http%3A%2F%2Fbeijing.onedengone.com%2Fstatic%2Fimages%2Fapple%2Fapple03.jpg",
		"goods_price": "50.00",
		"specification": "每箱约重8斤",
		"stock": "88",
		"goods_count": 0
	},
	{
		"id": "56",
		"goods_name": "草莓",
		"goods_pic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523893375920&di=90470ca4048eb6171f2b0283b29b4051&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7acb0a46f21fbe09316117dd61600c338744ad38.jpg",
		"goods_price": "25.00",
		"specification": "单个约重10克",
		"stock": "150",
		"goods_count": 0
	}
];
class RightList extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let url = types.CATEGORY_RIGHT_LIST_GET;
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
	render() {
		return (
			<div className="v-categary-right-list g-reset" style={{width: `75%`}}>
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
								stock
							} = item;
							return (
								<div 
									key={index}
									className="g-bb g-b-r g-pd g-tc g-flex"
									data-id={id}
								>
									<div style={{border: `solid 1px #ececec`}}>
										<img className="g-img-140" src={goods_pic} alt=""/>
									</div>
									<div className="g-col-2 g-lh-44 g-pd-l g-tl">
										<div className="g-black g-fs-30">{goods_name}</div>
										<div className="g-gray g-fs-24">{specification}</div>
										<div className="g-flex g-jc-sb">
											<div>单价：{goods_price}</div>
											<div>库存：<span className="g-pink">{stock}</span></div>
										</div>
										<div>月销售:<span>1</span>份</div>
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