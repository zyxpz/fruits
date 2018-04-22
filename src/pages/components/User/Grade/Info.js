import React, { Component } from 'react';
import propTypes from 'prop-types';
const divStyle = {
	width: 260,
	height: 260,
	border: `solid 1px #ececec`,
	borderRadius: `100%`,
	overflow: `hidden`,
	margin: `0 auto`,
};
class Info extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { info } = this.props;
		const {
			level,
			money,
			need_money,
			need_number,
			number,
			headimgurl = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2808175471,563936336&fm=200&gp=0.jpg"
		} = info;
		return (
			<div className="v-user-grade-info g-reset">
				<div className="g-bg-white g-m-b-20 g-pd">
					<div style={divStyle}>
						<img style={{ width: `100%`, height: `100%` }} src={headimgurl} alt=""/>
					</div>
					<div className="g-pd g-tc g-fs-34">
						当前会员等级： {level}
					</div>
				</div>
				<div className="g-flex g-jc-sb g-bg-white"> 
					<div className="g-1of2 g-tc">
						<p className="g-gray g-pd">已消费</p>
						<p className="g-fs-30 g-pd-b"><span className="g-orange">{money}</span>元</p>
						<p className="g-fs-30 g-pd-b">升级还需<span className="g-pink">{need_money}</span>元</p>
					</div>
					<div className="g-1of2 g-tc">
						<p className="g-gray g-pd">已消费</p>
						<p className="g-fs-30 g-pd-b"><span className="g-orange">{number}</span>次</p>
						<p className="g-fs-30 g-pd-b">升级还需<span className="g-pink">{need_number}</span>次</p>
					</div>
				</div>
			</div>
		);
	}

}
export default Info;