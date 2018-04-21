import * as types from '../../constants/actions/category';
import { initItem } from '../../utils/utils';
const initialState = {
    left: {
        isFetching: 0,
        itemArr: [],
        itemObj: {}
    },
    right:{},
    current_id: "",
    category_name: "",
    firstData: []
};
export default function category (state = initialState, action={}) {
    let itemArr, itemObj, items, curr_id;
    switch(action.type) {
        case types.CATEGORY_LEFT_NAV_GET + '_ON':
            state = {
                ...state,
            }
            return state;
        case types.CATEGORY_LEFT_NAV_GET + '_SUCCESS':
            items = initItem(action.data.data, "goods_category_id");
            curr_id = action.data.data[0].goods_category_id
            state = {
                ...state,
                left: {
                    isFetching: 1,
                    ...state.left,
                    itemArr: [...[], ...items.itemArr],
                    itemObj: {...{}, ...items.itemObj}
                },
                current_id: curr_id,
                category_name: action.data.data[0].categroy_name
            }
            return state;
        case types.CATEGORY_RIGHT_LIST_GET + '_ON':
            state = {
                ...state,
            }
            return state;
        case types.CATEGORY_RIGHT_LIST_GET + '_SUCCESS':
            state = state.current_id ? 
            {
                ...state,
                right: {
                    ...state.right,
                    [state.current_id]: {
                        ...action.data.data
                    }
                },
                category_name: state.left.itemObj[state.current_id].categroy_name
            }
            : 
            {
                ...state,
                firstData: [...[],...action.data.data.list],
            }
            return state;
        case types.CATEGORY_MAIN_CHANGE:
            state = {
                ...state,
                current_id: action.id,
            };
            return state;
        default:
        return state;
    }
}