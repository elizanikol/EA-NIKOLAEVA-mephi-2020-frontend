import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import { createStore} from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { createRootReducer } from '../../reducer';
import { Router } from './Router';

const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history)
);

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    </Provider>
)

