import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Actions } from 'react-native-router-flux';

export default class PageThree extends Component {
  render() {
   // const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
      <View style={{margin: 128}}>
        <Text>PageThree!</Text>
      </View>
    )
  }
}