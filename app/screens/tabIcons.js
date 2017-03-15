import React, {Component} from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

export default class tabIcons extends Component{
    render(){
	const imageSource = [
            require('./../../img/home.png'), require('./../../img/community.png'), require('./../../img/store.png'), require('./../../img/dot.png')
        ];
    let source = imageSource[this.props.idx];
    return (
            <View style={styles.container}>
                <Image source={source} style={styles.image}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 27,
        height: 27
    }
}