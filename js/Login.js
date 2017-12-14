import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Contact from './Contact';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.wrapImage}>
					<SimpleLineIcons color="dodgerblue" name="bag" size={55} />
				</View>
				<View style={styles.wrapFormLogin}>
					<View style={styles.formLogin}>
						<Text style={styles.loginText}>LOGIN</Text>
						<Text style={styles.emailText}>Email</Text>
						<View style={styles.inputWrap}>
							<MaterialCommunityIcons
								style={{ marginLeft: 10 }}
								color="dodgerblue"
								name="email-open-outline"
								size={16}
							/>
							<TextInput
								keyboardType={'email-address'}
								style={styles.inputText}
								placeholder="Enter email"
								underlineColorAndroid="transparent"
							/>
						</View>
						<Text style={styles.passwordText}>Password</Text>
						<View style={styles.inputWrap}>
							<Ionicons style={{ marginLeft: 13 }} color="dodgerblue" name="ios-lock" size={18} />
							<TextInput
								secureTextEntry={true}
								style={styles.inputText}
								placeholder="Enter password"
								underlineColorAndroid="transparent"
							/>
						</View>
						<TouchableOpacity style={styles.forgotPass}>
							<Text style={styles.forgotText}>Forgot Password?</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
							<Text style={styles.loginTextButton}>LOGIN</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.viewChild} />
				<Contact name="Register" navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	wrapFormLogin: {
		width: 8 * width / 9,
		height: 17 * height / 32,
		borderRadius: 7,
		elevation: 3,
	},
	formLogin: {
		marginLeft: 15,
		marginTop: 40,
	},
	wrapImage: {
		backgroundColor: '#FFF',
		width: 5 * width / 18,
		height: 5 * height / 32,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 3,
		borderRadius: 50,
		top: 5 * height / 64,
		zIndex: 9900,
	},
	emailText: {
		marginTop: 15,
		color: '#808080',
	},
	passwordText: {
		marginTop: 15,
		color: '#808080',
	},
	forgotText: {
		color: 'dodgerblue',
		fontWeight: 'bold',
		fontSize: 12,
	},
	loginText: {
		fontSize: 18,
		alignItems: 'flex-start',
		fontWeight: 'bold',
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
	loginTextButton: {
		fontSize: 18,
		color: 'dodgerblue',
		fontWeight: 'bold',
		marginTop: 50,
	},
	inputText: {
		marginLeft: 16,
		width: 29 * width / 36,
	},
	inputWrap: {
		height: 35,
		flexDirection: 'row',
		borderRadius: 5,
		width: 29 * width / 36,
		borderWidth: 0.3,
		borderColor: '#000000',
		alignItems: 'center',
		marginTop: 10,
	},
	forgotPass: {
		alignSelf: 'flex-end',
		marginRight: 10,
		marginTop: 10,
	},
	buttonLogin: {
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		shadowOpacity: 0.5,
	},
};
