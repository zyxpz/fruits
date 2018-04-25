import React, { Component } from 'react';

class Goods extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list } = this.props;
		return (
			<div
				className="g-m-b-20 g-bg-white"
			>
				{
					list.map((item, index) => {
						const { goods_pic, goods_name, goods_price, goods_count, specification, } = item;
						return (
							<div 
								className="g-bb g-b-r g-pd g-tc g-flex g-bb"
							>	
								<div className="g-flex g-ai-c" style={{ width: `100%` }}>
									<div className="g-col g-flex">
										<div style={{ border: `solid 1px #ececec`, width: 140, height: 140 }}>
											<img className="g-img-140" src={goods_pic} alt=""/>
										</div>
										<div className="g-lh-44 g-pd-l g-tl g-col">
											<div className="g-flex">
												<div className="g-black g-fs-30 g-twoline g-col">{goods_name}</div>
											</div>
											<div className="g-gray g-fs-24">{specification}</div>
											<div className="g-flex g-jc-sb">
												<div className="g-pink">￥<span className="g-fs-30">{goods_price}</span></div>
												<div className="g-gray">x {goods_count}</div>
											</div>
										</div>
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

export default Goods;