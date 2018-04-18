import * as types from '../../constants/actions/category';
const initialState = {
};
export default function category (state = initialState, action={}) {
    switch(action.type) {
        case types.CATEGORY_LEFT_NAV_GET + '_ON':
            state = {
                ...state,
            }
            return state;
        case types.CATEGORY_LEFT_NAV_GET + '_SUCCESS':
            state = {
                ...state,
            }
            return state;
        case types.HOME_COUNT_REDUCE:
            state = {
                ...state,
            }
            return state;
        default:
        return state;
    }
}