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

export const changeInputRadio =  id => ({
	type: types.CART_CHANGT_INPUT_RADIO,
	id,
});


export const popupShowOrHide = opts => ({
	type: types.CART_POPUP_SHOW,
	opts,
});

export const changeAddress = opts => ({
	type: types.CART_ADDRESS_CHANGE,
	opts
});