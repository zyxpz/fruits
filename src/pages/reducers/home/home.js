import * as types from '../../constants/actions/home';
const initialState = {
	count: 0
};
export default function home (state = initialState, action = {}) {
	switch (action.type) {
		case types.HOME_COUNT_ADD + '_ON':
			state = {
				...state,
				count: state.count
			};
			return state;
		case types.HOME_COUNT_ADD + '_SUCCESS':
			state = {
				...state,
				count: state.count + 1
			};
			return state;
		case types.HOME_COUNT_REDUCE:
			state = {
				...state,
				count: state.count - 1
			};
			return state;
		default:
			return state;
	}
}