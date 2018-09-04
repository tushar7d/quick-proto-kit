import React, { Component } from 'react';
import { Stack } from 'kit';


export default class ViewMobile extends Component {
	render() {
		return (
			<Stack
				vertical
				stretch
				bg={'grey100'}
				width={['100%', '100%', '861px']}
				maxWidth={['375px', '100%', '100%']}
				height={'100vh'}
				m={'auto'}
				p={-3}>
				{this.props.children}
			</Stack>
		);
	}
}
