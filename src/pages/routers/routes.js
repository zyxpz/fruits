import { homeConfig } from '../containers/Home/App';
import { userConfig } from '../containers/User/App';
import { goodsConfig } from '../containers/Goods/App';
import { cartConfig } from '../containers/Cart/App';


export const routeConfig  = [
	...homeConfig,
	...userConfig,
	...goodsConfig,
	...cartConfig,
];
