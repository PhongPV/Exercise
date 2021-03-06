import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import ListData from './ListData';
const img = require('../img/example.jpg');

const baseURL =
	'https://www.foody.vn/__get/Place/HomeBrowseTableNow?t=1513238008581&Count=10&Page=1&SortType=1&CategoryId=0&Lat=0&Lon=0';
// var TIME = Date.now();
// var COUNT = '10';
// var PAGE = '2';
// var SORT_TYPE = '1';
// var CATEGORY_ID = '0';
// var LAT = '0';
// var LON = '0';

export default class Home extends Component {
	state = {
		data: [],
	};
	loadData = async () => {
		try {
			const response = await axios.get(baseURL, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
			this.setState(() => {
				return {
					data: response.data.Items,
				};
			});
		} catch (e) {
			console.log(e);
		}
	};

	async componentDidMount() {
		await this.loadData();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ListData data={this.state.data} />
			</View>
		);
	}
}
