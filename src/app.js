import { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import registerScreens from '~/containers/screens';
import * as appRootActions from '~/actions/appRoot';
import configureStore from '~/stores/configureStore';

const store = configureStore();
registerScreens(store, Provider);
const navigatorStyle = {
  navBarComponentAlignment: 'fill',
  navBarBackgroundColor: 'white',
  navBarTranslucent: false,
  navBarNoBorder: true,
  navBarTextColor: 'black',
  navBarButtonColor: 'black',
  drawUnderNavBar: false,
  drawUnderTabBar: true,
  screenBackgroundColor: '#EAECEE',
  navBarHideOnScroll: true,
  topBarElevationShadowEnabled: false,
};


export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appRootActions.appInitialized());
  }

  onStoreUpdate() {
    const { appRoot } = store.getState().appRoot;

    // handle a appRoot change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot !== appRoot) {
      this.currentRoot = appRoot;
      this.startApp(appRoot);
    }
  }

  startApp(appRoot) {
    switch (appRoot) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Classting.Login',
            title: '로그인',
            navigatorStyle: {},
            navigatorButtons: {},
          },
        });
        return;

      case 'after-login':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: '뉴스피드',
              screen: 'Classting.NewsFeed',
              title: '뉴스피드',
              icon: require('~/assets/tab/ic_menu_newsfeed_inactive.png'),
              selectedIcon: require('~/assets/tab/ic_menu_newsfeed_active.png'),
              navigatorStyle: {
                ...navigatorStyle,
              },
            },
            {
              label: '글쓰기',
              screen: 'Classting.Write',
              title: '글쓰기',
              icon: require('~/assets/tab/ic_menu_newsfeed_inactive.png'),
              selectedIcon: require('~/assets/tab/ic_menu_newsfeed_active.png'),
              navigatorStyle: {
                ...navigatorStyle,
              },
            },
          ],
          // ios tab style
          tabsStyle: {
            tabBarTextFontSize: 12,
            tabBarSelectedButtonColor: '#00c896',
            tabBarBackgroundColor: '#ffffff',
            initialTabIndex: 0,
          },
          // android tab style
          appStyle: {
            tabBarTextFontSize: 12,
            forceTitlesDisplay: true,
            tabBarSelectedButtonColor: '#00c896',
            tabBarBackgroundColor: '#ffffff',
            initialTabIndex: 0,
            hideBackButtonTitle: true,
          },
        });
        return;

      default:
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Classting.Login',
            title: '로그인',
            navigatorStyle: {},
            navigatorButtons: {},
          },
        });
    }
  }
}
