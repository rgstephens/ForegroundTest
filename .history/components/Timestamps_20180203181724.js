
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class Timestamps extends Component {
  render() {
      console.log('props:', this.props);
    return (
      <View>
        <FlatList
          data={this.props.timestamp}
          renderItem={({ item }) => <Text>{item.getMonth() + '/' + item.getDate() + ' ' + item.getHours() + ':' + item.getMinutes() + ':' + item.getSeconds()}</Text>}
        />
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