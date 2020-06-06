import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {reducer as reduxFormReducer} from "redux-form";

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
});
