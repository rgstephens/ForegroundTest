import React, { Component } from "react";
import { Button, StyleSheet, Text, View, FlatList, Switch } from "react-native";

export default class Timestamps extends Component {
  constructor() {
    super();
    this.state = {
      fgServiceStatus: false
    };
  }

  toggleService = value => {
    console.log('toggleService:', value);
    this.setState({
      fgServiceStatus: value
    });

    if (value) {
      console.log("starting service");
    } else {
      console.log("stopping service");
    }
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={value => this.toggleService(value)}
          style={{ marginBottom: 10 }}
          value={this.state.fgServiceStatus}
        />
        <FlatList
          data={this.props.timestamp}
          renderItem={({ item }) => (
            <Text>
              {item.time.toISOString()} (elapsed: {item.diff})
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
  }
});
