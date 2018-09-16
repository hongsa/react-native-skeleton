import * as types from '~/actions/actionTypes';
import { createAction } from 'redux-actions';


export function changeAppRoot(appRoot) {
  return {
    type: types.ROOT_CHANGED,
    appRoot,
  };
}

export function appInitialized() {
  return async function (dispatch) {
    await dispatch(changeAppRoot('login'));
    // await dispatch(changeAppRoot('after-login'));
  };
}

export function login() {
  return async function (dispatch) {
    await dispatch(changeAppRoot('after-login'));
  };
}

export const resetReduxData = createAction(types.RESET_REDUX_DATA);
