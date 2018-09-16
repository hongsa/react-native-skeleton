/* eslint no-underscore-dangle: "off" */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';

import rootReducer from '~/reducers/rootReducer';


if (__DEV__) {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = isTest => (
  (__DEV__) && !isTest ? Reactotron.createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
    : createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
);

export default function configureStore(isTest = false) {
  return store(isTest);
}
