export const orderConfig = [
	{
		path: '/order/list',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./Modules/OrderList').default);
			});
		},
		// onEnter: redirectToLogin
	}
]; 