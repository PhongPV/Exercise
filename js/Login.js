import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	KeyboardAvoidingView,
} from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Contact from './Contact';

const { width, height } = Dimensions.get('window');
import LoginText from './Form/LoginText';
import InputEmail from './Form/InputEmail';
import InputPassword from './Form/InputPassword';
import ForgotPass from './Form/ForgotPass';
import LoginButton from './Form/LoginButton';

export default class Login extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.wrapImage}>
					<SimpleLineIcons color="#29b6f6" name="bag" size={55} />
				</View>
				<KeyboardAvoidingView style={styles.loginContainer} behavior="height">
					<View style={styles.wrapFormLogin}>
						<LoginText loginText="LOGIN" />
						<InputEmail />
						<InputPassword />
						<ForgotPass />
						<LoginButton navigation={navigation} />
					</View>
					<View style={styles.viewChild} />
				</KeyboardAvoidingView>

				<Contact />
				<KeyboardAvoidingView style={styles.wrapRegister} behavior="position">
					<View style={styles.register}>
						<Text style={{ color: '#808080' }}>Don't have an account?</Text>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
							<Text style={styles.textLoginRegister}> Register</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	loginContainer: {
		flex: 4,
		top: -50,
		width: '100%',
		paddingBottom: 5,
	},
	wrapFormLogin: {
		paddingHorizontal: 10,
		flex: 1,
		borderRadius: 7,
		elevation: 3,
		overflow: 'visible',
	},
	wrapImage: {
		backgroundColor: '#FFF',
		width: 100,
		height: 100,
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 3,
		borderRadius: 50,
		zIndex: 9900,
	},
	viewChild: {
		backgroundColor: 'white',
		borderBottomLeftRadius: 7,
		borderBottomRightRadius: 7,
		width: '90%',
		height: 20,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 2,
		alignSelf: 'center',
	},
	textLoginRegister: {
		color: 'dodgerblue',
		fontWeight: 'bold',
	},
	wrapRegister: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 10,
	},
	register: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
};
