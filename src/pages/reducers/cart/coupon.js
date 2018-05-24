import * as types from '../../constants/actions/cart';
const initialState = {
	list: []
};
export default function cartCoupon (state = initialState, action = {}) {
	switch (action.type) {
		case types.CART_COUPON_MAIN_POST + '_ON':
			state = {
				...state,
			};
			return state;
		case types.CART_COUPON_MAIN_POST + '_SUCCESS':
			state = {
				...state,
				list: [
					...action.data.data
				]
			};
			return state;
		default:
			return state;
	}
}