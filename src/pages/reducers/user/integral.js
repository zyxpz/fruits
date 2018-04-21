import * as types from '../../constants/actions/user';
const initialState = {
	integral: "0",
	list: []
};
export default function integral (state = initialState, action = {}) {
	switch (action.type) {
		case types.USER_INTEGRAL_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.USER_INTEGRAL_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				integral: action.data.data.integral,
				list: action.data.data.list
			};
			return state;
		default:
			return state;
	}
}