/**
 * 引入共用的action
 * ajax
 */
export { request } from './_common/request';
import * as types from '../constants/actions/category';
export function countAdd() {
    return {
        type: types.HOME_COUNT_ADD
    }
}
