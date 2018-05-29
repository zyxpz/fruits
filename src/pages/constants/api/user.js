const api = {
	/**
	 *加法
	 */
	'USER_MAIN_GET': '/member/member.json',
	'USER_COUPON_GET': '/member/available-coupon.json',  // 可用优惠券
	'USER_BALANCE_MAIN_GET': '/member/money.json',  // 余额
	'USER_BALANCE_RECHARGE_POST': '/member/money.json',  // 余额
	'USER_INTEGRAL_MAIN_GET': '/member/integral.json',  // 积分
	'USER_GRADE_MAIN_GET': '/member/level.json',  // 会员等级
};
export default api;