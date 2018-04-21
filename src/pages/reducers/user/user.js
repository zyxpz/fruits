import * as types from '../../constants/actions/user';
const initialState = {
};
export default function user (state = initialState, action = {}) {
	switch (action.type) {
		case types.USER_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.USER_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				...action.data.data
			};
			return state;
		default:
			return state;
	}
}