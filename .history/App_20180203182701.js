/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, FlatList, View } from "react-native";
import store from "./store/store.js";
import TimestampsContainer from "./containers/TimestampsContainer";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <TimestampsContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
