import * as types from '../../constants/actions/user';
const initialState = {
	list: []
};
export default function coupon (state = initialState, action = {}) {
	switch (action.type) {
		case types.USER_COUPON_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.USER_COUPON_GET + '_SUCCESS':
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