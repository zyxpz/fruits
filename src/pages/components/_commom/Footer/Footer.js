import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
const list = [
	{
		name: "首页",
		icon: "icon-home",
		route: "/",
	},
	{
		name: "商品",
		icon: "icon-categary",
		route: "/category",
	},
	{
		name: "购物车",
		icon: "icon-cart",
		route: "/cart",
	},
	{
		name: "个人中心",
		icon: "icon-mine",
		route: "/user",
	},
];
class Footer extends Component { // 不用Pure
	render() {
		return (
			<div>
				<div style={{ height: 95 }} />
				<footer 
					className="g-fixed-content g-flex g-reset g-tc g-lh-44 g-bt"
				>
					{
						list.map((item, index) => {
							const { name, route, icon, onClick } = item;
							return (
								<Link
									key={route}
									to={route}
									onClick={onClick}
									activeClassName={`g-orange`}
									className="g-flex g-fd-c g-col"
								>
									<i className={`iconfont ${icon} g-fs-36`} style={{ paddingTop: 5 }}/>
									<div className="g-fs-22">{name}</div>
								</Link> 	
							);
						})
					}
				</footer>
			</div>
		);
	}
};
Footer.propTypes = {

};
export default Footer;

