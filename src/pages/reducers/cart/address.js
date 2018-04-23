import * as types from '../../constants/actions/cart';
const initialState = {};

let id = 1;

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
			data = delet({
				id,
				list: state.list
			});
			state = {
				...state,
				list: data,
			};
			return state;
		case types.CART_ADDRESS_ADD_MAIN_GET + '_SUCCESS':
			state = {
				...state,
				list: [
					...state.list,
					action.param
				]
			};
			// location.reload(); // 暂定添加完刷新页面，要不然用户删除新增地址会失败，因为id前端生成和服务端不同
			return state;
		case types.CART_ADDRESS_DEF_PLACE_MAIN_GET + '_SUCCESS':
			_global.history.goBack();
			break;
		default:
			return state;
	}
}