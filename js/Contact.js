import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Contact extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View>
				<View style={styles.wrapOrWith}>
					<View style={{ backgroundColor: 'gray', width: 100, height: 2, marginRight: 5 }} />
					<Text style={{ color: '#808080', fontSize: 15 }}>Or with</Text>
					<View style={{ backgroundColor: 'gray', width: 100, height: 2, marginLeft: 5 }} />
				</View>

				<View style={styles.wrapContact}>
					<TouchableOpacity style={styles.contact}>
						<FontAwesome name="facebook" color="dodgerblue" size={16} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.contact}>
						<FontAwesome name="google-plus" color="red" size={16} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.contact}>
						<FontAwesome name="twitter" color="#00ffff" size={16} />
					</TouchableOpacity>
				</View>

				<View style={styles.register}>
					<Text style={{ color: '#808080' }}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate(`${this.props.name}`)}>
						<Text style={{ color: 'dodgerblue', fontWeight: 'bold' }}> {this.props.name}</Text>
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
		elevation: 1,
		shadowOpacity: 0.5,
	},
	register: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 30,
	},
});
