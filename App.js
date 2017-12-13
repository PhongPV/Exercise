import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './js/Login';
import Register from './js/Register';
import { StackNavigation } from './js/Router';
export default class App extends React.Component {
	render() {
		return <StackNavigation />;
	}
}
