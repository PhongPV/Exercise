import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const img = require('../img/example.jpg');

export default class Test extends Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<View style={styles.wrapForm}>
					<Image source={img} style={{ width: 300 }} />
					<Text style={[styles.title, { fontWeight: 'bold' }]}>GRILLE6- Steakhouse</Text>
					<Text style={styles.information}>106 Hào Nam Kèo Dài, Quận ...</Text>
					<View style={styles.line} />
					<View style={styles.wrapNotify}>
						<View style={styles.notify}>
							<Entypo name="attachment" size={16} />
						</View>
						<Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Cả ngày - Giảm 10%</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	wrapForm: {
		width: 300,
		height: 350,
		marginTop: 100,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 3,
		borderRadius: 1,
	},
	title: {
		marginLeft: 10,
		fontSize: 18,
		marginTop: 15,
	},
	line: {
		width: 300,
		height: 2,
		backgroundColor: 'gray',
		marginTop: 10,
	},
	wrapNotify: {
		marginLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	information: {
		marginLeft: 10,
		color: 'gray',
		marginTop: 10,
	},
	notify: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
};
