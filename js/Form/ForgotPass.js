import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const ForgotPass = () => {
	const styles = {
		container: {
			flex: 1,
		},
		forgotPass: {
			alignSelf: 'flex-end',
			marginTop: 10,
		},
		forgotText: {
			color: 'dodgerblue',
			fontWeight: 'bold',
			fontSize: 12,
		},
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.forgotPass}>
				<Text style={styles.forgotText}>Forgot Password?</Text>
			</TouchableOpacity>
		</View>
	);
};
export default ForgotPass;
