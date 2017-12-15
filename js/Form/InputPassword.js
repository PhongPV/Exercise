import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

class InputPassword extends React.Component {
	state = {
		isShow: false,
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.passwordText}>Password</Text>
				<View style={styles.inputWrap}>
					<Ionicons style={styles.iconStyle} color="dodgerblue" name="ios-lock" size={18} />
					<TextInput
						secureTextEntry={!this.state.isShow}
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
						{this.state.isShow === true ? (
							<Ionicons color="dodgerblue" name="ios-eye" size={18} />
						) : (
							<Ionicons color="dodgerblue" name="ios-eye-off" size={18} />
						)}
						<Text style={styles.textShow}>Show</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 2,
	},
	passwordText: {
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
	iconStyle: {
		marginHorizontal: 10,
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
	inputText: {
		flex: 1,
	},
};

export default InputPassword;
