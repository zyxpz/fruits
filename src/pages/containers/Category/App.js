export const categoryConfig = [
    {
        path: '/category',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/Category').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 