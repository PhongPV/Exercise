import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Contact from './Contact';

export default class Login extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center' }}>
				<View style={styles.wrapImage}>
					<SimpleLineIcons style={{ fontWeight: '0.2' }} color="dodgerblue" name="handbag" size={55} />
				</View>
				<View style={{ width: 320, height: 320, borderRadius: 7, elevation: 3 }}>
					<View style={{ marginLeft: 10, marginTop: 60 }}>
						<Text style={styles.textStyle}>LOGIN</Text>
						<Text style={{ marginTop: 10, color: '#808080' }}>Email</Text>
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
						<Text style={{ marginTop: 10, color: '#808080' }}>Password</Text>
						<View style={styles.inputWrap}>
							<Ionicons style={{ marginLeft: 13 }} color="dodgerblue" name="ios-lock" size={18} />
							<TextInput
								style={{ marginLeft: 16, width: 200 }}
								placeholder="Enter password"
								underlineColorAndroid="transparent"
							/>
						</View>
						<TouchableOpacity style={styles.forgotPass}>
							<Text style={{ color: 'dodgerblue', fontWeight: 'bold', fontSize: 12 }}>
								Forgot Password?
							</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
							<Text style={{ fontSize: 18, color: 'dodgerblue', marginTop: 10, fontWeight: 'bold' }}>
								LOGIN
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Contact name="Register" navigation={this.props.navigation} />
			</View>
		);
	}
}

const styles = {
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
	image: {
		width: 60,
		height: 60,
		tintColor: 'dodgerblue',
	},
	textStyle: {
		fontSize: 18,
		alignItems: 'flex-start',
		fontWeight: 'bold',
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
