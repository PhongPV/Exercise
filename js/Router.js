import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';

export const StackNavigation = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		},
	},
	Register: {
		screen: Register,
	},
});
