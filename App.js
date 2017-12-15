import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './js/Home';
import Register from './js/Register';
import { StackNavigation } from './js/Router';
export default class App extends React.Component {
	render() {
		return <StackNavigation />;
	}
}
