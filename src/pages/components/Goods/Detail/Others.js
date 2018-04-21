import React, { Component } from 'react';
import API_ROOT from '../../../constants/apiRoot';
import { Link } from "react-router";
import * as types from '../../../constants/actions/detail';
import Stepper from "../../../components/_commom/Stepper/Stepper";

class Others extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { extension } = this.props;
		console.log(extension, 8);
		return (
			<div className="v-detail-others g-reset g-bg-white">
				<p className="g-pd g-lh-44 g-fs-28">购买该产品的果友也买了</p>
				{/*
					<div className="g-flex">
						<div className="g-1of3 g-flex g-fd-c">
							<div>
								<div style={{width: `70%`, height: _global.innerWidth/3 * 0.7, border: `solid 1px #ececec`, margin: `auto`}}>
									<img style={{width: `100%`, height: `100%`}} src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2808175471,563936336&fm=200&gp=0.jpg" alt=""/>
								</div> 
							</div>
							<div>
								<p className="g-fs-28 g-pd g-twoline">南丰贡橘</p>
								<p className="g-fs-24 g-gray g-pd-l">12个装</p>
								<p className="g-pink g-fs-30 g-pd-l g-pd-r">￥88</p>
							</div>
						</div>
						<div className="g-1of3">2</div>
						<div className="g-1of3">3</div>
					</div>
				*/}
				{
					extension.map((item, index) => {
						const { goods_name, goods_pic, goods_price, specification, id } = item;
						return (
							<Link 
								key={index}
								className="g-bb g-b-r g-pd g-tc g-flex g-bb"
								data-id={id}
								to={`/goods/detail/${id}`}
							>
								<div style={{ border: `solid 1px #ececec`, width: 140, height: 140 }}>
									<img className="g-img-140" src={goods_pic} alt=""/>
								</div>
								<div className="g-col-2 g-lh-44 g-pd-l g-tl">
									<div className="g-black g-fs-30 g-twoline">{goods_name}</div>
									<div className="g-gray g-fs-24">{specification}</div>
									<div className="g-flex g-jc-sb">
										<div className="g-pink">￥<span className="g-fs-30">{goods_price}</span></div>
									</div>
								</div>
							</Link>
						);
					})
				}
				
			</div>
		);
	}

}
export default Others;