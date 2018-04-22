import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toast, Tabs } from 'antd-mobile';
import ScrollList from './ScrollList';
const TabPane = Tabs.TabPane;
const tabs = [
	{
		name: "全部",
		type: "0"
	},
	{
		name: "未支付",
		type: "1"
	},
	{
		name: "未收货",
		type: "2"
	},
	{
		name: "未评价",
		type: "3"
	},
	{
		name: "已评价",
		type: "4"
	}
	
];
// @1,都可注释，但考虑现有项目可能是兼容移动端；下个项目再做测试
class ListTabs extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillMount() {
		// @1 - start -
		const { type } = this.props;
		this.state = {
			type: type
		};
		// @1 - end -
	}
	componentWillReceiveProps(nextprops) {
		// @1 - start -
		if (this.props.type != nextprops.type) {
			this.handleChange(nextprops.type);
		}
		// @1 - end -
	}
	handleChange(key){
		_global.history.replace(`/order/list?type=${key}`);
		// @1 - start -
		this.setState({
			type: key
		});
		// @1 - end -
	}
	// renderPane(item){
	// 	const { type } = item;
	// 	const { listInfo } = this.props;
	// 	return (
	// 		<div className="g-tabs">
	// 			<div>{item.name}</div>
	// 			{(type != 0 && !!data[type - 1] && data[type - 1] != 0) && <div>{data[type - 1] > 100 ? "···" : data[type - 1]}</div>}
	// 		</div>
	// 	);
	// }
	render() {
		const { listInfo, actions, type } = this.props;
		return (
			<div className="g-am-init g-reset">
				<Tabs activeKey={type} onChange={this.handleChange} swipeable={!1} animated={!0}>
					{
						tabs.map((item, index) => {
							// const html = this.renderPane(item);
							return (
								<TabPane tab={item.name} key={item.type}>
									<ScrollList 
										show={type == item.type}
										type={item.type}
										listInfo={listInfo[item.type]}
										actions={actions}
										tabs={tabs}
									/>
								</TabPane>
							);
						})
					}
				</Tabs>
		  </div>
		);
	}
}
ListTabs.propTypes = {
};
export default ListTabs;