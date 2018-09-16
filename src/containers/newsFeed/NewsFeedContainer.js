import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
  },
});

const NewsFeedContainer = () => (
  <View style={styles.container}>
    <Text>newsfeed</Text>
  </View>
);

NewsFeedContainer.defaultProps = {
};

NewsFeedContainer.propTypes = {
};

export default NewsFeedContainer;
