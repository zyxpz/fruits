import * as types from '../../constants/actions/cart';
const initialState = {
	list: []
};
export default function address(state = initialState, action = {}) {
	switch (action.type) {
		case types.CART_ADDRESS_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.CART_ADDRESS_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				list: action.data.data,
			};
			return state;
		default:
			return state;
	}
}