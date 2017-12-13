import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Contact extends Component {
	render() {
		return (
			<View>
				<View style={styles.wrapOrWith}>
					<View style={{ backgroundColor: 'gray', width: 100, height: 2, marginRight: 5 }} />
					<Text>Or with</Text>
					<View style={{ backgroundColor: 'gray', width: 100, height: 2, marginLeft: 5 }} />
				</View>

				<View style={styles.wrapContact}>
					<View style={styles.contact}>
						<FontAwesome name="facebook" color="dodgerblue" size={16} />
					</View>
					<View style={styles.contact}>
						<FontAwesome name="google-plus" color="red" size={16} />
					</View>
					<View style={styles.contact}>
						<FontAwesome name="twitter" color="dodgerblue" size={16} />
					</View>
				</View>

				<View style={styles.register}>
					<Text>Don'n have an account? </Text>
					<TouchableOpacity>
						<Text style={{ color: 'dodgerblue' }}> {this.props.name}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapOrWith: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	wrapContact: {
		flexDirection: 'row',
		width: 250,
		justifyContent: 'space-around',
		marginTop: 10,
	},
	contact: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		shadowOpacity: 0.5,
	},
	register: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 70,
	},
});
