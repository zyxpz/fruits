/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';
import * as types from '../constants/actions/category';
export function categoryChange(id) {
	return {
		type: types.CATEGORY_MAIN_CHANGE,
		id
	};
}
