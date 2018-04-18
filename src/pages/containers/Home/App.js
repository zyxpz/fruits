export const homeConfig = [
    {
        path: '/',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/Home').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 