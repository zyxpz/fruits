import React, { Component } from 'react';
import API_ROOT from '../../../constants/apiRoot';
import * as types from '../../../constants/actions/detail';
import Stepper from "../../../components/_commom/Stepper/Stepper";

class Info extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { goods } = this.props;
		const { goods_name, goods_price, specification, stock } = goods;
		return (
			<div className="v-detail-info g-reset g-bg-white">
				<div className="g-lh-44 g-fs-28">
					<div className="g-twoline g-pd">{goods_name}</div>
					<div>
						<div className="g-fs-24 g-gray g-pd-l g-pd-r">规格：{specification}</div>
					</div>
					<div className="g-flex g-jc-sb g-pd-t-10 g-pd-b g-pd-l g-pd-r g-bb">
						<div className="g-pink">￥{goods_price}</div>	
						<div>
							<Stepper 
								min={1}
								max={stock}
							/>
						</div>
					</div>
					<div className="g-flex g-jc-sb g-ai-c g-pd g-bb">
						<div>商品评价</div>
						<div className="g-flex g-ai-c">
							<div>
								<div className="g-gray g-fs-26 g-lh-44">97%的果友给了</div>
								<div>123</div>
							</div>
							<i className="iconfont icon-right g-fs-40"/>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Info;