export const goodsConfig = [
	{
		path: '/goods/category',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Category').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/goods/detail/:id',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Detail').default);
			});
		},
		// onEnter: redirectToLogin
	}
]; 