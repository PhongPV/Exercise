import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

const InputEmail = () => {
	const styles = {
		container: {
			flex: 2,
		},
		emailText: {
			marginTop: 15,
			color: '#808080',
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
		inputText: {
			flex: 1,
		},
		iconStyle: {
			marginHorizontal: 10,
		},
	};
	return (
		<View style={styles.container}>
			<Text style={styles.emailText}>Email</Text>
			<View style={styles.inputWrap}>
				<MaterialCommunityIcons
					style={styles.iconStyle}
					color="dodgerblue"
					name="email-open-outline"
					size={16}
				/>
				<TextInput style={styles.inputText} placeholder="Enter email" underlineColorAndroid="transparent" />
			</View>
		</View>
	);
};

export default InputEmail;
