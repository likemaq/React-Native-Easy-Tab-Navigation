var React = require('react');
var Reactnative =  require('react-native');
var { Component } = React;
var {
  StyleSheet,
  Text,
  View
} = Reactnative;

import { Router, Scene } from 'react-native-router-flux';

import tabIcons from './screens/tabIcons';
import PageOne from './screens/PageOne';
import PageTwo from './screens/PageTwo';
import PageThree from './screens/PageThree';
import PageFour from './screens/PageFour';

export default class index extends Component {
  render() {
    return (
     <Router>
        <Scene key="root">
          <Scene key='tabbar' tabs={true} tabBarStyle={style.tabBarStyle}>
           <Scene key='tab1' component={PageOne} title='Home' rightButtonImage={require('./../img/plus.png')} rightButtonIconStyle={style.buttonicon} onRight={() => alert('Right button')} navigationBarStyle={style.tabBarStyle} icon={tabIcons} idx={0} initial={true}/>
            <Scene key='tab2' component={PageTwo} title='Community' navigationBarStyle={style.tabBarStyle} icon={tabIcons} idx={1} />
            <Scene key='tab3' component={PageThree} title='Store' navigationBarStyle={style.tabBarStyle} icon={tabIcons} idx={2}/>
            <Scene key='tab4' component={PageFour} title='More' navigationBarStyle={style.tabBarStyle} icon={tabIcons} idx={3}/>
           </Scene>
        </Scene>
      </Router>
    );
  }
}

let style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: 'white',
            opacity        : 1
        },
        buttonicon: {
            width: 27,
            height: 27
        }
});
