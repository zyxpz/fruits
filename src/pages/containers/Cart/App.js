export const cartConfig = [
    {
        path: '/cart',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/Cart').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 