import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Contact from './Contact';

const { width, height } = Dimensions.get('window');

export default class Register extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formRegister}>
					<View style={styles.title}>
						<Text style={styles.registerText}>REGISTER</Text>
						<View style={styles.wrapProfile}>
							<Ionicons color="dodgerblue" name="md-person-add" size={18} />
							<Text style={styles.profileText}>Profile Pie</Text>
						</View>
					</View>
					<Text style={styles.textStyle}>Name</Text>
					<View style={styles.inputWrap}>
						<MaterialIcons style={{ marginLeft: 10 }} color="dodgerblue" name="person" size={16} />
						<TextInput
							style={styles.inputText}
							placeholder="Enter name"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.textStyle}>Phone Number</Text>
					<View style={styles.inputWrap}>
						<FontAwesome style={{ marginLeft: 10 }} color="dodgerblue" name="phone" size={18} />
						<TextInput
							style={styles.inputText}
							placeholder="Enter number"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.textStyle}>Email</Text>
					<View style={styles.inputWrap}>
						<MaterialCommunityIcons
							style={{ marginLeft: 10 }}
							color="dodgerblue"
							name="email-open-outline"
							size={16}
						/>
						<TextInput
							style={styles.inputText}
							placeholder="Enter email"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.textStyle}>Password</Text>
					<View style={styles.inputWrap}>
						<Ionicons style={{ marginLeft: 13 }} color="dodgerblue" name="ios-lock" size={18} />
						<TextInput
							style={{ marginLeft: 16, width: 200 }}
							placeholder="Enter password"
							underlineColorAndroid="transparent"
						/>
					</View>
					<TouchableOpacity style={styles.buttonRegister}>
						<Text style={styles.registerTextButton}>REGISTER</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewChild} />
				<Contact name="Login" navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		color: '#808080',
		marginLeft: 10,
		marginTop: 10,
	},
	formRegister: {
		shadowOpacity: 0.5,
		borderRadius: 7,
		elevation: 3,
		width: 320,
		height: 400,
	},
	viewChild: {
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		width: 29 * width / 36,
		height: 20,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 1,
	},
	inputText: {
		marginLeft: 15,
		width: 200,
	},
	registerText: {
		marginLeft: 10,
		fontWeight: 'bold',
	},
	wrapProfile: {
		flexDirection: 'row',
		marginRight: 10,
	},
	profileText: {
		color: 'dodgerblue',
		marginLeft: 5,
	},
	registerTextButton: {
		color: 'dodgerblue',
		marginTop: 15,
		fontWeight: 'bold',
		fontSize: 18,
	},
	title: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputWrap: {
		height: 35,
		flexDirection: 'row',
		borderRadius: 5,
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
