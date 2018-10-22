import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Constants } from 'expo'


export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> No Notifications || Notifications will Appear </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#34495e',
  },
});