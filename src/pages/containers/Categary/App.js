export const categaryConfig = [
    {
        path: '/categary',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./Modules/Categary').default);
            });
        },
        // onEnter: redirectToLogin
    }
]; 