/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';
import * as types from '../constants/actions/cart';
export function selectChange(type, id) {
	return {
		type: types.CART_SELECT_CHANGE,
		select_id: id,
		select_type: type
	};
}
