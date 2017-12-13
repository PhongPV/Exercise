import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Contact from './Contact';

export default class Register extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formRegister}>
					<View style={styles.title}>
						<Text style={{ marginLeft: 10 }}>REGISTER</Text>
						<View style={{ flexDirection: 'row', marginRight: 10 }}>
							<Ionicons color="dodgerblue" name="md-person-add" size={18} />
							<Text style={{ color: 'dodgerblue', marginLeft: 5 }}>Profile Pie</Text>
						</View>
					</View>
					<Text style={{ marginLeft: 10, marginTop: 10 }}>Name</Text>
					<View style={styles.inputWrap}>
						<MaterialIcons style={{ marginLeft: 10 }} color="dodgerblue" name="person" size={16} />
						<TextInput
							style={{ marginLeft: 15, width: 200 }}
							placeholder="Enter name"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={{ marginLeft: 10, marginTop: 10 }}>Phone Number</Text>
					<View style={styles.inputWrap}>
						<FontAwesome style={{ marginLeft: 10 }} color="dodgerblue" name="phone" size={18} />
						<TextInput
							style={{ marginLeft: 15, width: 200 }}
							placeholder="Enter number"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={{ marginLeft: 10, marginTop: 10 }}>Email</Text>
					<View style={styles.inputWrap}>
						<MaterialCommunityIcons
							style={{ marginLeft: 10 }}
							color="dodgerblue"
							name="email-open-outline"
							size={16}
						/>
						<TextInput
							style={{ marginLeft: 15, width: 200 }}
							placeholder="Enter email"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={{ marginLeft: 10, marginTop: 10 }}>Password</Text>
					<View style={styles.inputWrap}>
						<Ionicons style={{ marginLeft: 13 }} color="dodgerblue" name="ios-lock" size={18} />
						<TextInput
							style={{ marginLeft: 16, width: 200 }}
							placeholder="Enter password"
							underlineColorAndroid="transparent"
						/>
					</View>
					<TouchableOpacity
						style={styles.buttonRegister}
						onPress={() => this.navigation.navigate('Register')}
					>
						<Text style={{ color: 'dodgerblue', marginTop: 15 }}>REGISTER</Text>
					</TouchableOpacity>
				</View>
				<Contact name="Login" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	formRegister: {
		shadowOpacity: 0.5,
		borderRadius: 7,
		elevation: 3,
		width: 320,
		height: 400,
	},
	title: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputWrap: {
		height: 35,
		flexDirection: 'row',
		borderRadius: 2,
		width: 300,
		borderWidth: 0.3,
		borderColor: '#000000',
		alignItems: 'center',
		marginTop: 10,
		marginLeft: 10,
	},
	buttonRegister: {
		alignItems: 'center',
		marginTop: 20,
	},
});
