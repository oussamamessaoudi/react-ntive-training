/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import FetchExample from './source/Fetch/FetchExample';


const App = () => {
    return (
        <View style={{flex: 1}}>
            <FetchExample/>
        </View>
    );
};


export default App;
