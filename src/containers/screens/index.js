
import { Navigation } from 'react-native-navigation';

import { LoginContainer } from '~/containers/login';
import { NewsFeedContainer } from '~/containers/newsFeed';
import { WriteContainer } from '~/containers/write';

export default (store, Provider) => {
  Navigation.registerComponent('Classting.Login', () => LoginContainer, store, Provider);
  Navigation.registerComponent('Classting.NewsFeed', () => NewsFeedContainer, store, Provider);
  Navigation.registerComponent('Classting.Write', () => WriteContainer, store, Provider);
};
