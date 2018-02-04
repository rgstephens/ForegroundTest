
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
        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <Button
          title="Reset"
          onPress={this.props.reset}/>
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