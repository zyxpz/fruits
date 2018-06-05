export const homeConfig = [
	{
		path: '/',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('../Goods/Modules/Category').default);
			});
		},
		onEnter: (nextState, replace) => {
			replace("/goods/category")
		}
	},
	{
		path: '/home',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Home').default);
			});
		},
		// onEnter: redirectToLogin
	}
]; 