import { createStore, ApplyMidleWare, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const midleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // applyMidleWare(...midleware)
    composeWithDevTools(applyMiddleware(...midleware))
);

 export default store;