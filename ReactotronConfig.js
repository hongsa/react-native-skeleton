import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

// First, set some configuration settings on how to connect to the app
Reactotron.configure({
  name: 'Classting React Native',
});

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
Reactotron.useReactNative({
  asyncStorage: { ignore: ['secret'] },
});

// add some more plugins for redux & redux-saga
Reactotron.use(reactotronRedux());

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}
