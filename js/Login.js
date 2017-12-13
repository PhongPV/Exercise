import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

const logo = require('../img/icon_logo.png');
import Contact from './Contact';

export default class Login extends Component {
	render() {
		const shadowStyle = {
			shadowOpacity: 0.5,
			shadowRadius: 1,
			elevation: 3,
		};
		const navigation = this.props.navigation;
		return (
			<View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
				<View style={[styles.wrapImage, shadowStyle]}>
					<Image style={styles.image} source={logo} />
				</View>
				<View style={{ width: 320, height: 320, borderRadius: 7, elevation: 3 }}>
					<View style={{ marginLeft: 10, marginTop: 60 }}>
						<Text style={styles.textStyle}>LOGIN</Text>
						<Text style={{ marginTop: 10 }}>Email</Text>
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
						<Text style={{ marginTop: 10 }}>Password</Text>
						<View style={styles.inputWrap}>
							<Ionicons style={{ marginLeft: 13 }} color="dodgerblue" name="ios-lock" size={18} />
							<TextInput
								style={{ marginLeft: 16, width: 200 }}
								placeholder="Enter password"
								underlineColorAndroid="transparent"
							/>
						</View>
						<TouchableOpacity style={styles.forgotPass}>
							<Text style={{ color: 'dodgerblue' }}>Forgot Password?</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonLogin}>
							<Text style={{ fontSize: 18, color: 'dodgerblue', marginTop: 10 }}>LOGIN</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Contact name="Register" navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapImage: {
		backgroundColor: '#FFF',
		width: 100,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: 50,
		top: 50,
		zIndex: 9900,
	},
	image: {
		width: 60,
		height: 60,
		tintColor: 'dodgerblue',
	},
	textStyle: {
		fontSize: 18,
		alignItems: 'flex-start',
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
});
