import { homeConfig } from '../containers/Home/App';
import { userConfig } from '../containers/User/App';
import { goodsConfig } from '../containers/Goods/App';
import { cartConfig } from '../containers/Cart/App';
import { orderConfig } from '../containers/Order/App';



export const routeConfig  = [
	...homeConfig,
	...userConfig,
	...goodsConfig,
	...cartConfig,
	...orderConfig
];
