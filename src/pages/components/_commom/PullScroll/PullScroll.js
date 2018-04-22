import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import pureRender from 'pure-render-decorator';
import MainView from './MainView';
import Dropload from './Dropload';
import 'style-loader!./PullScroll.scss';
// @pureRender
class PullScroll extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			pulledY: 0, // 下拉的距离
			pullStatus: 0 // 下拉当前状态
		};
		this.handlePullStatusChange = ::this.handlePullStatusChange;
		this.handlePulling = ::this.handlePulling;
		this.setScroll = ::this.setScroll;
	}
	componentDidUpdate(){
		this.setScroll();
	}
	setScroll(){
		if (!this.props.scroll){
			return;
		}
		const { wrapper } = this.props;
		let scrollEle = !wrapper ? document.body : document.querySelector(wrapper);
		let curUrl = `${location.pathname}${location.search}`;
		let curTop = _global.scroll[curUrl] || 0;
		scrollEle.scrollTop = curTop;
	}
	// PullScroll状态变更逻辑
	handlePullStatusChange(pullStatus) {
		const { pulledPauseY } = this.props;
		/**
		 * 0.未touchstart 
		 * 1.pulling但未达到pulledPauseY 
		 * 2.pulling达到pulledPauseY 
		 * 3.进入pause状态 （loading）
		 */
		switch (pullStatus) {
			case 0:
				this.setState({
					pullStatus,
					pulledY: 0
				});
				break;
			case 3:
				this.setState({
					pullStatus,
					pulledY: pulledPauseY
				});
				break;
			default:
				this.setState({
					pullStatus,
				});
				break;
		}
	}
	handlePulling(pulledY){
		this.setState({
			pulledY: pulledY
		});
	}
	setDefault(){
		this.setState({
			pullStatus: 0,
			pulledY: 0
		});
		this.refs.main.setDefault();
	}
	render() {
		const { pulledY, pullStatus } = this.state;
		const { className, isEnd, style, wrapper, height, pull, scroll, currentPage, itemArr } = this.props;
		return (
			<div 
				className={
					classnames(
						(`common-pull-scroll`),
						(className),
						(wrapper && wrapper.replace('.', ''))
					)
				} 
				style={{ "minHeight": `${height}px`, height: (wrapper && height) ? `${height}px` : "auto" }}
			>
				<Dropload type={`pull`} status={pullStatus} pulledY={pulledY} show={pull}/>
				<MainView 
					{...this.props}
					onPullStatusChange={this.handlePullStatusChange}
					onPulling={this.handlePulling}
					ref = "main"
					isEnd = {isEnd}
					currentPage = {currentPage}
					itemArr = {itemArr}
					
				/>
				<Dropload 
					status={isEnd} 
					show={scroll} 
					pulledY={pulledY}
					isEnd = {isEnd}
					currentPage = {currentPage}
					itemArr = {itemArr}
				/>
			</div>
		);
	}
}
PullScroll.propTypes = {
	// 相关api
	className: PropTypes.string, // 原项目scrollClass
	style: PropTypes.object, // 原项目scrollStyle
	height: PropTypes.number,
	/**
	 * 容器 用于事件绑定
	 * 想在微信浏览器中不露底，必传
	 */
	wrapper: PropTypes.string,
	/**
	 * 是否运行组件，默认true，关联到触发加载数据的问题
	 */
	show: PropTypes.bool,
	/**
	 * 是否支持下拉，默认true
	 */
	pull: PropTypes.bool,
	/**
	 * 是否支持上滑，默认true
	 */
	scroll: PropTypes.bool,
	// for pull
	/**
	 * 下拉结束即从状态2切换到状态3时的事件，准备去加载数据了
	 */
	loadDataForPull: PropTypes.func,
	/**
	 * 处于pause状态即status为3时的Y方向应所在的位置
	 */
	pulledPauseY: PropTypes.number,
	/**
	 * 下拉距离缩放比例，将会影响能够下拉的距离,可以理解为阻力
	 */
	scaleY: PropTypes.number,
	/**
	 * 可用于上滑加载数据
	 */
	// for scroll
	loadDataForScroll: PropTypes.func,
	/**
	 * 切换过程中判断某个值的不同来置顶
	 */
	resetPrvScrollTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
	/**
	 * 用去判断是否自动执行价值数据
	 */
	currentPage: PropTypes.number,
	/**
	 * 上“滑”加载标志
	 * 有个一个状态，第一次进入自动加载，加载中，全部加载
	 */
	isEnd: PropTypes.number
};
PullScroll.defaultProps = {
	height: window.innerHeight,
	scaleY: 0.4,
	pulledPauseY: 60,
	isEnd: 0,
	show: true,
	pull: true,
	scroll: true
};
export default PullScroll;

