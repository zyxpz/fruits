export const userConfig = [
    {
        path: '/user',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/User').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 