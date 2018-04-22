import * as types from '../../constants/actions/cart';
const initialState = {
};

const delet = params => {
	const {
		id,
		list,
	} = params;
	let arr = list.filter(val => val.id !== id);
	return arr;
};

export default function address(state = initialState, action = {}) {
	let id, data;
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
		case types.CART_ADDRESS_DEL_MAIN_GET + '_SUCCESS':
			id = action.param.id;
			data = delet({ id, list: action.param.list });
			state = {
				...state,
				list: data,
			};
			return state;
		case types.CART_ADDRESS_ADD_MAIN_GET + '_SUCCESS':
			console.log(action, state.list);
			state = {
				...state,
				list: [
					...state.list,
					action.param
				]
			};
			return state;
		default:
			return state;
	}
}