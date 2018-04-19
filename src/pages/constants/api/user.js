const api = {
	/**
	 *加法
	 */
	'USER_MAIN_GET': '/api/member/member.json',
	'USER_COUPON_GET': '/api/member/available-coupon.json',  // 可用优惠券
	'USER_BALANCE_MAIN_GET': '/api/member/money.json',  // 余额
	'USER_BALANCE_RECHARGE_POST': '/api/member/money.json',  // 余额
	'USER_INTEGRAL_MAIN_GET': '/api/member/integral.json',  // 积分
};
export default api;