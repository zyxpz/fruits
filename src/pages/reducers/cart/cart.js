import * as types from '../../constants/actions/cart';
const initialState = {
};
export default function cart(state = initialState, action = {}) {
	switch (action.type) {
		case types.CART_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.CART_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				...action.data.data,
			};
			return state;
		default:
			return state;
	}
}