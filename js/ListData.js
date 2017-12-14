import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const img = require('../img/example.jpg');

const { width } = Dimensions.get('window');
export default class ListData extends Component {
	renderItem = ({ item }) => {
		return (
			<View style={styles.wrapForm}>
				<Image source={{ uri: `${item.Avatar}` }} style={{ width: width, height: 200 }} />
				<Text style={[styles.title, { fontWeight: 'bold' }]}>{item.Name}</Text>
				<Text style={styles.information}>{item.Address}</Text>
				<View style={styles.line} />
				<View style={styles.wrapNotify}>
					<View style={styles.notify}>
						<Entypo name="attachment" size={16} />
					</View>
					<Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{item.DealInfo}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				{this.props.data.length === 0 ? (
					<Text>Loading ...</Text>
				) : (
					<FlatList data={this.props.data} keyExtractor={item => item.Id} renderItem={this.renderItem} />
				)}
			</View>
		);
	}
}

const styles = {
	wrapForm: {
		width: width,
		height: 350,
		marginTop: 30,
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
		width: width,
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
