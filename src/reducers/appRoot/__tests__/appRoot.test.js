import * as appRootActions from '~/actions/appRoot';
import configureStore from '~/stores/configureStore';

const store = configureStore(true);
describe('app root', () => {
  describe('reducer', () => {
    it('login', async () => {
      await store.dispatch(appRootActions.appInitialized());
      const state = store.getState().appRoot;
      expect(state.appRoot).toBe('login');
    });

    it('after login', async () => {
      await store.dispatch(appRootActions.login());
      const state = store.getState().appRoot;
      expect(state.appRoot).toBe('after-login');
    });
  });
});
