import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Contact extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.wrapOrWith}>
					<View style={styles.lineOne} />
					<Text style={styles.orWithText}>Or with</Text>
					<View style={styles.lineTwo} />
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
						<Text style={styles.textLoginRegister}> {this.props.name}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		alignContent: 'space-between',
	},
	wrapOrWith: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	wrapContact: {
		flexDirection: 'row',
		width: 5 * width / 6,
		justifyContent: 'space-around',
		marginTop: 10,
	},
	contact: {
		width: 5 * width / 36,
		height: 5 * height / 64,
		borderRadius: 5 * width / 64,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 1,
		shadowOpacity: 0.5,
	},
	lineOne: {
		backgroundColor: 'gray',
		width: 11 * width / 36,
		height: 2,
		marginRight: 5,
	},
	lineTwo: {
		backgroundColor: 'gray',
		width: 11 * width / 36,
		height: 2,
		marginLeft: 5,
	},
	orWithText: {
		color: '#808080',
		fontSize: 17,
	},
	textLoginRegister: {
		color: 'dodgerblue',
		fontWeight: 'bold',
	},
	register: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 40,
	},
};
