import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Contact from './Contact';

const { width, height } = Dimensions.get('window');

export default class Register extends Component {
	state = {
		isShow: true,
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formRegister}>
					<View style={styles.title}>
						<Text style={styles.registerText}>REGISTER</Text>
						<View style={styles.wrapProfile}>
							<Ionicons color="dodgerblue" name="md-person-add" size={18} />
							<TouchableOpacity>
								<Text style={styles.profileText}>Profile Pie</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Text style={styles.textStyle}>Name</Text>
					<View style={styles.inputWrap}>
						<MaterialIcons style={styles.iconStyle} color="dodgerblue" name="person" size={16} />
						<TextInput
							style={styles.inputText}
							placeholder="Enter name"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.textStyle}>Phone Number</Text>
					<View style={styles.inputWrap}>
						<FontAwesome style={styles.iconStyle} color="dodgerblue" name="phone" size={18} />
						<TextInput
							style={styles.inputText}
							placeholder="Enter number"
							underlineColorAndroid="transparent"
						/>
					</View>
					<Text style={styles.textStyle}>Email</Text>
					<View style={styles.inputWrap}>
						<MaterialCommunityIcons
							style={styles.iconStyle}
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
						<Ionicons style={styles.iconStyle} color="dodgerblue" name="ios-lock" size={18} />
						<TextInput
							secureTextEntry={this.state.isShow}
							style={styles.inputText}
							placeholder="Enter password"
							underlineColorAndroid="transparent"
						/>
						<TouchableOpacity
							style={styles.wrapShowPass}
							onPress={() => {
								this.setState({ isShow: !this.state.isShow });
							}}
						>
							{this.state.isShow == true ? (
								<Ionicons color="dodgerblue" name="ios-eye" size={18} />
							) : (
								<Ionicons color="dodgerblue" name="ios-eye-off" size={18} />
							)}
							<Text style={styles.textShow}>Show</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.buttonRegister}>
						<Text style={styles.registerTextButton}>REGISTER</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewChild} />
				<Contact />
				<View style={styles.register}>
					<Text style={{ color: '#808080' }}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Text style={styles.textLoginRegister}> Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	textStyle: {
		color: '#808080',
		marginLeft: 10,
		marginTop: 10,
	},
	formRegister: {
		flex: 5,
		width: '100%',
		shadowOpacity: 0.5,
		marginTop: 10,
		borderRadius: 7,
		elevation: 3,
		paddingHorizontal: 10,
	},
	viewChild: {
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		width: '90%',
		height: 20,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 1,
	},
	inputText: {
		flex: 1,
	},
	inputWrap: {
		width: '100%',
		height: 35,
		flexDirection: 'row',
		borderRadius: 5,
		borderWidth: 0.3,
		borderColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
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
	wrapShowPass: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 10,
	},
	textShow: {
		fontSize: 10,
		color: 'dodgerblue',
		marginLeft: 3,
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
	buttonRegister: {
		alignItems: 'center',
		marginTop: 20,
	},
	textLoginRegister: {
		color: 'dodgerblue',
		fontWeight: 'bold',
	},
	register: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 10,
	},
	iconStyle: {
		marginHorizontal: 10,
	},
};
