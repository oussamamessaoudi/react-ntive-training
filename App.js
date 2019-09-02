/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';


const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <Text>Hello World</Text>
            </SafeAreaView>
        </Fragment>
    );
};


export default App;
