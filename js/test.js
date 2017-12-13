import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Test extends Component {
	render() {
		const shadowStyle = {
			elevation: 5,
			shadowOpacity: 0.5,
			shadowOffset: { width: 0, height: 2 },
			shadowColor: 'red',
		};
		return (
			<View style={styles.container}>
				<TouchableOpacity style={[styles.image, shadowStyle]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	image: {
		width: 100,
		height: 100,
		backgroundColor: 'dodgerblue',
	},
});
