import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
  },
});

const WriteContainer = () => (
  <View style={styles.container}>
    <Text>write</Text>

  </View>
);

WriteContainer.defaultProps = {
};

WriteContainer.propTypes = {
};

export default WriteContainer;
