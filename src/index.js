/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './containers/main';
import Nettbank from './containers/nettbank';
import store from './configureStore';
import './style/style.scss';

const router = (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route
                    path="/nettbank"
                    component={Nettbank}
                />
            </Switch>
        </HashRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
