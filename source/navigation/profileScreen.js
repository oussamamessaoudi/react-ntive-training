import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class ProfileScreen extends Component<{ name: any }> {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        debugger;
        const {name} = this.props.navigation.state.params;
        return (<View><Text>ProfileScreen of {name}</Text></View>);
    }
}
