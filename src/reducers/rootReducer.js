import { combineReducers } from 'redux';

import appRoot from './appRoot';

/*
This file exports the reducers as an object which
will be passed onto combineReducers method at src/app.js
*/
const rootReducer = combineReducers({
  appRoot,
});

export default rootReducer;
