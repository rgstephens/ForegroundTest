import React, { Component } from "react";
import { Button, StyleSheet, Text, View, FlatList, Switch } from "react-native";
import ForegroundService from "../FGServiceBridgeNativeModule";

export default class Timestamps extends Component {
  constructor() {
    super();
    this.state = {
      fgServiceStatus: false
    };
  }

  toggleService = value => {
    console.log("toggleService:", value);
    this.setState({
      fgServiceStatus: value
    });

    if (value) {
      console.log("starting service");
      ForegroundService.startService().then(function(value) {
        console.log("startService return:", value, ", state:", component.state);
      });
    } else {
      console.log("stopping service");
      ForegroundService.stopService().then(function(value) {
        console.log("stopService return:", value, ", state:", component.state);
      });
    }
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={value => this.toggleService(value)}
          style={{ marginBottom: 10, alignSelf: "center" }}
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
    fontWeight: "bold"
  }
});
