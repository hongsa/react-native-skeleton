import * as types from '~/actions/actionTypes';
import initialState from '~/reducers/initialState';

// root reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case types.ROOT_CHANGED:
      return {
        ...state,
        appRoot: action.appRoot,
      };

    case types.RESET_REDUX_DATA:
      return {
        ...initialState,
        appRoot: 'after-login',
      };

    default:
      return state;
  }
}
