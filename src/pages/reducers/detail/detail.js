import * as types from '../../constants/actions/detail';
const initialState = {
};
export default function detail (state = initialState, action={}) {
    switch(action.type) {
        case types.DETAIL_MAIN_GET + '_ON':
            state = {
                ...state,
            }
            return state;
        case types.DETAIL_MAIN_GET + '_SUCCESS':
            state = {
                ...state,
                ...action.data.data
            }
            return state;
        default:
        return state;
    }
}