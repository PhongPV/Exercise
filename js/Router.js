import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';

export const Router = StackNavigator({
	Login: {
		screen: Login,
	},
	Register: {
		screen: Register,
	},
});
