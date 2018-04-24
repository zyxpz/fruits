import * as types from '../../constants/actions/cart';
import * as categoryTypes from '../../constants/actions/category';

import { initItem } from "../../utils/utils";
const initialState = {
	itemArr: [],
	itemObj: {},
	total: 0
};
const initChangeDataFun = (itemObj) => {
	let total_amount = 0;
	for (let k in itemObj) {
		if (itemObj[k].is_selected) {
			total_amount += Number(itemObj[k].goods_count) * Number(itemObj[k].goods_price);
		}
	}
	total_amount = total_amount.toFixed(2);
	return { total_amount };
};
const initDeleteFun = (itemObj, itemArr, id) => {
	itemArr = itemArr.filter((val) => {
		return val != id;
	});
	for (let i in itemObj) {
		if (i == id) {
			itemObj.delete.i;
		}
	}
	return { itemArr, itemObj };
};
const initSelectAllFun = (itemObj, is_selected_all) => {
	for (let k in itemObj) {
		itemObj[k].is_selected = is_selected_all;
	}
	return itemObj;
};
const initSelectFun = (itemObj, id, is_selected_all) => {
	let arr = [];
	for (let k in itemObj) {
		if (k == id) {
			itemObj[k].is_selected = !itemObj[k].is_selected;
		}
		arr.push(itemObj[k].is_selected);
		if (arr.indexOf(false) > -1) {
			is_selected_all = 0;
		} else {
			is_selected_all = 1;
		}
	}
	return { itemObj, is_selected_all };
};
const selectStrFun = (itemObj) => {
	let arr = [], str = "";
	for (let k in itemObj) {
		if (itemObj[k].is_selected) {
			arr.push(k);
		}
	}
	str = arr.join(",");
	return str;
};
export default function cart(state = initialState, action = {}) {
	let items, total_amount, select_items, select_str;
	switch (action.type) {
		case types.CART_MAIN_GET + '_ON':
			state = {
				...state,
			};
			return state;
		case types.CART_MAIN_GET + '_SUCCESS':
			items = initItem(action.data.data.list);
			let itemObj = initSelectAllFun(items.itemObj, 1);
			select_str = selectStrFun(itemObj);
			state = {
				...state,
				total: action.data.data.total,
				itemObj: itemObj,
				itemArr: items.itemArr,
				is_all_selected: 1,
				select_str: select_str
			};
			return state;
		case types.CART_COUNT_CHANGE_POST + '_SUCCESS':
			const id = action.param.goods_id;
			const goods_count = action.param.goods_count;
			total_amount = initChangeDataFun({
				...state.itemObj,
				[id]: {
					...state.itemObj[id],
					goods_count: goods_count
				}
			}).total_amount;
			state = {
				...state,
				itemObj: {
					...state.itemObj,
					[id]: {
						...state.itemObj[id],
						goods_count: goods_count
					}
				},
				total: total_amount
			};
			return state;
		case types.CART_COUNT_DELETE_POST + '_SUCCESS':
			const del_id = action.param.goods_id;
			let data = initDeleteFun(state.itemObj, state.itemArr, del_id);
			state = {
				...state,
				itemObj: {
					...state.itemObj,
				},
				total: total_amount
			};
			return state;
		case types.CART_SELECT_CHANGE:
			let select_type = action.select_type;
			let select_id = action.select_id;
			if (select_type == 'all') {
				select_items = initSelectAllFun(state.itemObj, !state.is_all_selected);
				total_amount = initChangeDataFun(select_items).total_amount;
				select_str = selectStrFun(select_items);
				state = {
					...state,
					itemObj: initSelectAllFun(state.itemObj, !state.is_all_selected),
					is_all_selected: !state.is_all_selected,
					total: total_amount,
					select_str: select_str
				};
			} else {
				select_items = initSelectFun(state.itemObj, select_id, state.is_all_selected);
				total_amount = initChangeDataFun(select_items.itemObj).total_amount;
				select_str = selectStrFun(select_items.itemObj);
				state = {
					...state,
					itemObj: select_items.itemObj,
					is_all_selected: select_items.is_selected_all,
					total: total_amount,
					select_str: select_str
				};
			}
			return state;
		case categoryTypes.CATRGORY_COUNT_CHANGE_POST + '_SUCCESS':
			state = {
				...initialState,
			};
			return state;
		default:
			return state;
	}
}