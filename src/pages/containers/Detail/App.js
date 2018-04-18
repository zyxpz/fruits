export const detailConfig = [
    {
        path: '/detail',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/Detail').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 