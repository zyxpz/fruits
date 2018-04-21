export const cartConfig = [
	{
		path: '/cart',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Cart').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/cart/settlement',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Settlement').default);
			});
		},
		// onEnter: redirectToLogin
	}
]; 