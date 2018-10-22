import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Constants } from 'expo'


export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> Update will enable changing to Dark Theme </Text>
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
    textAlign: 'center',
    color: '#34495e',
  },
});