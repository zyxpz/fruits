import { DEV_WITH_PHP } from './constants';
import home from './api/home';
import cart from './api/cart';
import user from './api/user';
import category from './api/category';
import detail from './api/detail';



const API = Object.assign({},
    home,
    cart,
    user,
    category,
    detail
);
let baseUrl;

if (!DEV_WITH_PHP) {
    //开发环境-前端自模拟
    baseUrl = 'http://localhost:3000';
} else {
    //开发环境-后端数据
    baseUrl = 'http://localhost:8181';
    // baseUrl = 'http://localhost:8080';
}


// if ("production" !== process.env.NODE_ENV) {
//     /*开发环境*/
//     if (!DEV_WITH_PHP) {
//         //开发环境-前端自模拟
//         baseUrl = 'http://localhost:3000/api';
//     } else {
//         //开发环境-后端数据
//         baseUrl = 'http://localhost:8080/api';
//     }
// } else {
//     /*生产环境*/
//     baseUrl = location.origin;
// }


for (let i in API) {
    API[i] = baseUrl + API[i];
}
export default API;
