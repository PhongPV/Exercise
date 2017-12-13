import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const img = require('../img/example.jpg');

const baseURL =
	'https://www.foody.vn/__get/Place/HomeBrowseTableNow?t=[TIME.NOW]&Count=[SO_LUONG]&Page=0&SortType=1&CategoryId=0&Lat=0&Lon=0';

export default class Home extends Component {
	render() {
		return (
			<View>
				<Text>Hello</Text>
			</View>
		);
	}
}
