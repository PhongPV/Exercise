import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Home from './Home';

export const StackNavigation = StackNavigator({
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
		},
	},
});
