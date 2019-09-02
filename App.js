/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import PizzaTranslator from './source/input/PizzaTranslator';


const App = () => {
    return (
        <View style={{flex: 1}}>
            <PizzaTranslator/>
        </View>
    );
};


export default App;
