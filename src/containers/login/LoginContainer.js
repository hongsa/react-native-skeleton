import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import * as appRootActions from '~/actions/appRoot';

export class LoginContainer extends Component {
  render() {
    return (
      <View>
        <Button large onPress={() => this.onLoginPress()} title="Continue">
          <Text> Continue</Text>
        </Button>
      </View>

    );
  }

  onLoginPress() {
    this.props.dispatch(appRootActions.login());
  }
}


export default connect()(LoginContainer);
