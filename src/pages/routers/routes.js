import { homeConfig } from '../containers/Home/App';
import { userConfig } from '../containers/User/App';
import { categoryConfig } from '../containers/Category/App';
import { cartConfig } from '../containers/Cart/App';
import { detailConfig } from '../containers/Detail/App';


export const routeConfig  = [
    ...homeConfig,
    ...userConfig,
    ...categoryConfig,
    ...cartConfig,
    ...detailConfig
]
