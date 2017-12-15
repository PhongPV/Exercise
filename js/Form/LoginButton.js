import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const LoginButton = props => {
	const navigation = props.navigation;
	const styles = {
		container: {
			flex: 1,
		},
		buttonLogin: {
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
		loginTextButton: {
			fontSize: 18,
			color: 'dodgerblue',
			fontWeight: 'bold',
		},
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.loginTextButton}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginButton;
