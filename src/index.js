/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import '@babel/polyfill';
import Main from './containers/main';
import store from './configureStore';
import '!style-loader!css-loader!sass-loader!./style/style.scss';

const router = (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route
                    path="/test"
                    render={() => <div>Dette er en underside</div>}
                />
            </Switch>
        </HashRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
