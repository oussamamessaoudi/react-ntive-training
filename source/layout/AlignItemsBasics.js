import React, {Component} from 'react';
import {View} from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                alignContent: 'flex-start',
                flexWrap: 'wrap',
            }}>
                <View style={{height: 80, width: 50, backgroundColor: 'powderblue'}}/>
                <View style={{height: 80, width: 50, alignSelf: 'center', backgroundColor: 'skyblue'}}/>
                <View style={{height: 800, width: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
};
