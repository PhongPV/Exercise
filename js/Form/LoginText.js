import React from 'react';
import { View, Text } from 'react-native';
const LoginText = ({ loginText }) => {
	const styles = {
		container: {
			flex: 2,
			justifyContent: 'flex-end',
		},
		loginText: {
			fontSize: 18,
			alignItems: 'flex-start',
			fontWeight: 'bold',
		},
	};
	return (
		<View style={styles.container}>
			<Text style={styles.loginText}>{loginText}</Text>
		</View>
	);
};
export default LoginText;
