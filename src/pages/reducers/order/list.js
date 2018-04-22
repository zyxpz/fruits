import * as types from '../../constants/actions/order';
import { initObj, initItem } from '../../utils/utils';
const initialState = {
	info: {
		isFetching: 0,      // 是否已经获取 
	},
	"0": { ...initObj },
	"1": { ...initObj },
	"2": { ...initObj },
	"3": { ...initObj },
	"4": { ...initObj },
};
export default function orderList (state = initialState, action = {}) {
	let items, type;
	switch (action.type) {
		case types.ORDER_LIST_MAIN_GET + '_ON':
			type = action.param.type;
			state = {
				...state,
				[type]: {
					...state[type],
					isEnd: 1
				}
			};
			return state;
		case types.ORDER_LIST_MAIN_GET + '_SUCCESS':
			items = initItem(action.data.data, "order_id");
			type = action.param.type;
			currentPage = state[type].currentPage + 1;
			totalPage = action.data.totalPage;
			state = {
				...state,
				info: {
					...state.info,
					isFetching: 1,
				},
				[type]: {
					...state[type],
					currentPage,
					totalPage,
					itemArr: [...state[type].itemArr, ...items.itemArr],
					itemObj: { ...state[type].itemObj, ...items.itemObj },
					isEnd: currentPage + 1 > totalPage ? 2 : 0
				}
			};
			return state;
		// 下拉刷新
		case types.ORDER_LIST_MAIN_GET + '_REFRESH':
			type = action.param.type;
			currentPage = 1;
			totalPage = action.data.totalPage;
			items = initItem(action.data.list, 'order_id');
			state = {
				...state,
				info: {
					...state.info,
					isFetching: 0,
				},
				[type]: {
					...initObj,
					currentPage,
					totalPage,
					itemArr: items.itemArr,
					itemObj: items.itemObj,
					isEnd: currentPage + 1 > totalPage ? 2 : 0
				}
			};
			return state;
		case types.ORDER_LIST_MAIN_GET + '_ERROR':
			type = action.param.type;
			state = {
				...state,
				[type]: {
					...state[type],
					isEnd: 3
				}
			};
			return state;
		default:
			return state;
	}
}