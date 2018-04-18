import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home';
import { SearchBar } from 'antd-mobile';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="v-categary-header g-reset">
				 {/*<div className="g-flex">
					<div>位置</div>
					<div>
						<SearchBar
							// defaultValue={value}
							// value={value}
							placeholder="搜索信息"
							// onCancel={this.handleSubmit}
							// onSubmit={this.handleSubmit}
							cancelText="搜索"
							// onChange={this.handleChange}
						/>
					</div>
				 </div>*/}
			</div>
		)
	}

}
export default Header;