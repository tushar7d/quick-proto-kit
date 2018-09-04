import React, { Component } from 'react';
import { View } from 'kit';

export default class Card extends Component {
	render() {
		return (
			<View minHeight={'50px'} bg={'white'} rounded m={2} minWidth={'320px'}>
				{this.props.children}
			</View>
		);
	}
}
