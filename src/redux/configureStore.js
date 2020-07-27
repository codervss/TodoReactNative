import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import TodoReducer from './reducers/TodoReducer';

export default (initialState = {}) => (
    createStore(
        combineReducers({
            todo: TodoReducer
        }),
        initialState,
        applyMiddleware(thunk)
    )
);