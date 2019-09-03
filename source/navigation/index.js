import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './homeScreen';
import {ProfileScreen} from './profileScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;



