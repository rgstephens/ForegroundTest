
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlastList
} from 'react-native';

export default class Timestamps extends Component {
  render() {
    return (
      <View>
        <Button
          title="Up"
          onPress={this.props.increment}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});