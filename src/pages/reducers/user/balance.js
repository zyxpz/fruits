import * as types from '../../constants/actions/user';
const initialState = {
	nickname: "",
	balance: "0"
};
export default function balance (state = initialState, action = {}) {
	switch (action.type) {
		case types.USER_BALANCE_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.USER_BALANCE_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				nickname: action.data.data.nickname,
				balance: action.data.data.remain
			};
			return state;
		default:
			return state;
	}
}