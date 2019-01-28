import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './components/main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#ffbf46',
    paddingVertical: 34
  }
});
