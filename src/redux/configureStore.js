import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import calcReducer from './calcReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const exportDefault = () => {
    const store = createStore(
        combineReducers({
            calc: calcReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

export default exportDefault;