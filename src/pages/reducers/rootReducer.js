import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './home/root';
import cart from './cart/root';
import category from './category/root';
import user from './user/root';
import detail from './detail/root';


// 之前的文档曾建议使用 ES6 的 import * as reducers 语法来获得 reducer 对象(我之前也是这么用的)。
// 这一点造成了很多疑问，因此现在建议在 reducers/rootReducer.js 里使用 combineReducers() 来对外输出一个 总的reducer


// rootReducer把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore
const rootReducer = combineReducers({
	routing: routerReducer,
	...home,
	...user,
	...cart,
	...category,
	...detail
});
export default rootReducer;
