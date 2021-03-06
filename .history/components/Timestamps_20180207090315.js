import React, { Component } from "react";
import { Button, StyleSheet, Text, View, FlatList, Switch } from "react-native";
import FGServiceBridge from "../FGServiceBridgeNativeModule";

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
      FGServiceBridge.startService().then(function(value) {
        console.log("startService return:", value);
      });
    } else {
      console.log("stopping service");
      FGServiceBridge.stopService().then(function(value) {
        console.log("stopService return:", value);
      });
    }
  };

  getPreferredField(item) {
    const value = item.name ? item.name : (item.localName ? item.localName : (item.id ? item.id : (item.time ? item.time.toISOString() + "(elapsed: " + item.diff + "" : "")));
    console.log('item:', value);
    return value;
  }

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
              {this.getPreferredField(item)}
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
