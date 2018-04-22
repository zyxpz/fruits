import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TabPane from './TabPane';
import "style-loader!./Tabs.scss";
class Tabs extends Component {
	static TabPane = TabPane;
	constructor(props, context) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.getIndex = this.getIndex.bind(this);
		this.state = {
			currentIndex: '',
			currentkey: ''
		};
	}
	componentWillMount(){
		const {
			currentkey
		} = this.state;
		let arrKeys = Children.map(this.props.children, (item, index) => {
			return [...[], item.key];
		});
		let index = this.getIndex(arrKeys, this.props.defaultActiveKey && this.props.defaultActiveKey);
		this.setState({
			currentIndex: index, // 通过keys判断现在默认tab的索引
			currentkey: this.props.defaultActiveKey || this.props.activeKey
		 });
	};
	// 函数判断默认tab的索引
	getIndex(arr, defaultActiveKey){
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == defaultActiveKey) {
				return i;
			}
		}
		return -1;
	}
	handleClick(event){
		const { onChange } = this.props;
		let $this = event.currentTarget;
		let index = $this.getAttribute("data-index");
		let key = $this.getAttribute("data-key");
		onChange && onChange(key);
		this.setState({
			currentIndex: index,
			currentkey: key
		});
	}
	render() {
		const { currentIndex, currentkey } = this.state;
		const { children, type, tabType } = this.props;
		let divStyle1;
		if (type === "rebate"){
			divStyle1 = {
				width: window.innerWidth * 0.4 / children.length,
				transform: `translate3d(${(window.innerWidth * 0.4 / children.length) * currentIndex}px, 0px, 0px)`,
			};
		} else {
			divStyle1 = {
				width: window.innerWidth * 1 / children.length,
				transform: `translate3d(${(window.innerWidth / children.length) * currentIndex}px, 0px, 0px)`,
				background: tabType === "PK" ? "#fa5a6e" : "#fe9053"
			};
		}
		let divStyle2 = {
			transform: `translate3d(-${(window.innerWidth) * currentIndex}px, 0px, 0px)`,
		};
		return (
			<div className="common-tabs g-bg-white">
				<div className="_bar" style={this.props.barStyle || {}} >
					<div className="_line-animated" style={divStyle1} />
					{
						Children.map(children, (item, index) => {
							return (
								<div
									className={
										classNames(
											"_tab",
											/* { "_active":(item.key == currentkey) }*/
										)
									}
									key={`${index}_item`}
									data-index={index}
									data-key={item.key}
									onClick={this.handleClick}
									style={{ color: item.key === currentkey ? (tabType === "PK" ? "#fa5a6e" : "#fe9053") : "" }}
								>
									{item.props.tab}
								</div>
							);
						})
					}

				</div>
				<div className="_content">
					{
						Children.map(children, (item, index) => {
							return (
								<div
									data-id={index}
									className="_animated"
									style={divStyle2}
								>
									{item}
								</div>
							);
						})
					}
				</div>
			</div>

		);
	}
}

export default Tabs;
