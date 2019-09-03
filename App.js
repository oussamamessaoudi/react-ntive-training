/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import AppNavigation from './source/navigation';


const App = () => {
    return (
        <View style={{flex: 1}}>
            <AppNavigation/>
        </View>
    );
};


export default App;
