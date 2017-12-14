import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
export default class ListData extends Component {
	renderItem = ({ item }) => {
		return (
			<View style={styles.wrapForm}>
				<Image source={{ uri: `${item.Avatar}` }} style={styles.image} />
				<TouchableOpacity>
					<Text style={[styles.title, { fontWeight: 'bold' }]}>{item.Name}</Text>
				</TouchableOpacity>
				<Text style={styles.information} numberOfLines={1}>
					{item.Address}
				</Text>
				<View style={styles.line} />
				<View style={styles.wrapNotify}>
					<View style={styles.notify}>
						<FontAwesome name="tag" color="white" size={16} />
					</View>
					<Text style={styles.dealInfo}>{item.DealInfo}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.wrapList}>
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
	wrapList: {
		flex: 1,
		alignItems: 'center',
	},
	dealInfo: {
		marginLeft: 10,
		fontWeight: 'bold',
	},
	image: {
		width: width,
		height: 5 * height / 16,
	},
	wrapForm: {
		width: 17 * width / 18,
		marginTop: 10,
		marginBottom: 10,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 4,
		borderRadius: 1,
		borderWidth: 0.3,
		backgroundColor: '#e3f2fd',
	},
	title: {
		marginLeft: 10,
		fontSize: 18,
		marginTop: 15,
	},
	line: {
		width: width,
		height: 2,
		backgroundColor: '#c5cae9',
		marginTop: 10,
	},
	wrapNotify: {
		marginLeft: 14,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	information: {
		marginLeft: 14,
		width: 5 * width / 6,
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
