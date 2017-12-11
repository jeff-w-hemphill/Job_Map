import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to JobMap', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688'},
	{ text: 'Set your location, then swipe away', color: '#03A9F4' }
];


class WelcomeScreen extends Component {
	onSlidesComplete = () => {
			this.props.navigation.navigate('map');
	}

	render() {
		return (
			<Slides data={SLIDE_DATA} style={{ flex: 1 }} onComplete={this.onSlidesComplete} />
			);
	}
}

export default WelcomeScreen;