export const userConfig = [
	{
		path: '/user',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/User').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/user/coupon',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Coupon').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/user/balance',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Balance').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/user/integral',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Integral').default);
			});
		},
		// onEnter: redirectToLogin
	},
	{
		path: '/user/grade',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/Grade').default);
			});
		},
		// onEnter: redirectToLogin
	}
]; 