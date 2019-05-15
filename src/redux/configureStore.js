import { createStore, combineReducers } from 'redux';

import calcReducer from './calcReducer';

const exportDefault = () => {
    const store = createStore(
        combineReducers({
            calc: calcReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

export default exportDefault;