import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./css/reset.scss";
import "./css/ui.scss";
import "./css/antd-reset.scss";
import "./pages/utils/global"


//redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

//所有的reducer
import reducers from './pages/reducers/rootReducer';

//路由
import { Router, Route, browserHistory, hashHistory } from 'react-router';

//所有的路由配置
import { routeConfig } from './pages/routers/routes';

import api from './pages/middleware/api';
//将 reducer, react-router 与 redux 绑定
const createStoreWithMiddleware = applyMiddleware(thunk,api)(createStore);
const store = createStoreWithMiddleware(reducers);

//路由生成规则, 与 redux 结合.
const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {
    render() { 
        return (
            <Provider store={store}>
                <Router history={history} routes={routeConfig}/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));