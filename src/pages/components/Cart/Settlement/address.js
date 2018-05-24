import React, { Component } from 'react';

class Address extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = (e) => {
		const { id } = this.props;
		_global.history.push(
			'/cart/settlement/address?id=' + id
		);
	}

	render() {
		const { is_address = 1 } = this.props;
		return (
			<div
				onClick={this.handleClick}
				className="g-m-b-20"
			>
				{
					is_address 
						?
						<div
							className="g-pd g-flex g-jc-sb g-gray g-bg-white"	
						>
							<div> 添加地址</div>
							 <i className="iconfont icon-right" />
						</div>
						:
						<div
							className="g-pd g-flex g-jc-sb g-ai-c g-gray g-bg-white"	
						>
							<i className="iconfont icon-addr g-fs-40"/>
							<div className="g-col g-flex g-jc-sb g-ai-c">
								<div className="g-col g-pd-l g-pd-r">
									<div>
									收货人：xxx
									</div>
									<div>
									收货地址：xxx
									</div>
								</div>
								 <i className="iconfont icon-right" />
							</div>
						</div>
				}
			</div>
		);
	}
}

export default Address;