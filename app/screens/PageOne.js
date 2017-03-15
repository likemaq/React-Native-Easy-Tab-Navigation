import React, { Component } from 'react';
import {Image,ScrollView, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
//import {Container, Header, Content, Footer, Title} from 'native-base';

//import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
   // const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
        <View style={{margin: 128}}>
            <Text>PageOne!</Text>
        </View>
    )
  }
}
