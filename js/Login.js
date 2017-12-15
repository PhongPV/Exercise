import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Contact from './Contact';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
	state = {
		isShow: true,
	};
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.wrapImage}>
					<SimpleLineIcons color="#29b6f6" name="bag" size={55} />
				</View>
				<View style={styles.wrapFormLogin}>
					<View style={styles.formLogin}>
						<Text style={styles.loginText}>LOGIN</Text>
						<Text style={styles.emailText}>Email</Text>
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
						<Text style={styles.passwordText}>Password</Text>
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
						<TouchableOpacity style={styles.forgotPass}>
							<Text style={styles.forgotText}>Forgot Password?</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
						<Text style={styles.loginTextButton}>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewChild} />
				<Contact />
				<View style={styles.register}>
					<Text style={{ color: '#808080' }}>Don't have an account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Register')}>
						<Text style={styles.textLoginRegister}> Register</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#FFF',
		alignItems: 'center',
	},
	wrapFormLogin: {
		paddingHorizontal: 10,
		width: '100%',
		alignItems: 'center',
		flex: 3,
		borderRadius: 7,
		elevation: 3,
	},
	formLogin: {
		marginTop: 40,
	},
	wrapImage: {
		backgroundColor: '#FFF',
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 3,
		borderRadius: 50,
		top: 50,
		zIndex: 9900,
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
	forgotPass: {
		alignSelf: 'flex-end',
		marginTop: 10,
	},
	buttonLogin: {
		elevation: 3,
		shadowOpacity: 0.5,
		position: 'absolute',
		alignSelf: 'center',
		bottom: 15,
	},
	loginTextButton: {
		fontSize: 18,
		color: 'dodgerblue',
		fontWeight: 'bold',
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
