import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Home from './Home';

export const StackNavigation = StackNavigator(
	{
		Login: {
			screen: Login,
			navigationOptions: {
				header: null,
			},
		},
		Home: {
			screen: Home,
			navigationOptions: {
				header: null,
			},
		},
		Register: {
			screen: Register,
			navigationOptions: {
				headerStyle: {
					height: 40,
				},
				title: 'Register',
				headerTintColor: 'dodgerblue',
			},
		},
	},
	{
		cardStyle: {
			paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
		},
	}
);
