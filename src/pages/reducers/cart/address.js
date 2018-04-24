import * as types from '../../constants/actions/cart';
import observableSymbol from 'symbol-observable';
const initialState = {
};

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
	let id, data, arr = [], defaultBtn;
	switch (action.type) {
		case types.CART_ADDRESS_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.CART_ADDRESS_MAIN_GET + '_SUCCESS':
			action.data.data.map(t => {
				if (t.status === '1') {
					t.checked = true;
					id = t.id;
				}
				arr.push(t);
			});

			
			state = {
				...state,
				list: arr,
				id,
			};
			
			return state;
		case types.CART_ADDRESS_DEL_MAIN_POST + '_SUCCESS':
			id = action.param.id;
			data = delet({
				id,
				list: state.list
			});
			state = {
				...state,
				list: data,
				defaultBtn: true
			};
			return state;
		case types.CART_CHANGT_INPUT_RADIO:
			state.list.map(t => {
				if (t.id === action.id) {
					t.checked = true;
				} else {
					t.checked = false;
				}
				arr.push(t);
			});
			state = {
				...state,
				list: arr,
				id: action.id,
				defaultBtn: false
			};

			return state;
		case types.CART_POPUP_SHOW:
			state = {
				...state,
				...action.opts
			};
			return state;
		case types.CART_ADDRESS_CHANGE: 
			state.list.map(t => {
				if (t.id === action.opts.id) {
					data = t;
				}
			});
			state = {
				...state,
				show: true,
				changeData: data
			};
			return state;
		default:
			return state;
	}
}