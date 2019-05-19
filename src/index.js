import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Main from './components/Main/Main'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import GameReducer from './Reducer/GameReducer';
import TopReducer from './Reducer/TopReducer';
import ChannelReducer from './Reducer/ChannelReducer';
import NavigatorReducer from './Reducer/NavigatorReducer'


const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
};

const composedReducer = combineReducers({GameReducer, TopReducer, ChannelReducer, NavigatorReducer});
const store = createStore(
    composedReducer,
    applyMiddleware(thunkMiddleware)
);
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
