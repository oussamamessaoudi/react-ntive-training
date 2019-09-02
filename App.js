/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Touchables from './source/touches/Touchables';


const App = () => {
    return (
        <View style={{flex: 1}}>
            <Touchables/>
        </View>
    );
};


export default App;
