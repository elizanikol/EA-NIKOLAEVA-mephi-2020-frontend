import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import optionReducer from './components/option/reducers/OptionReducer'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    option: optionReducer
});
