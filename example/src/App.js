import React, { Component } from 'react';
import theme from './theme';
import { ThemeWrapper, View, Stack, Image, Text } from 'kit';

import ViewMobile from './Views/ViewMobile';
import Card from './Components/Card';

import CarImage from './Assets/CarImage.jpg';
import SuppImage from './Assets/SuppImage.png';
import Passengers from './Assets/Passengers.png';

export default class App extends Component {
	render() {
		return (
			<ThemeWrapper theme={theme}>
				<ViewMobile>
					<Card>
						<Stack horizontal top>
							<View width={['80px', '150px']} height={'120px'} m={2}>
								<Stack vertical center top>
									<Image width={['100%', '150px']} src={CarImage} mb={0} />
									<Image width={['60px', '80px']} src={SuppImage} mb={0} />
								</Stack>
							</View>

							<View child expandable height={['320px', '180px']} mr={2} my={2}>
								<Stack vertical top left>
									<Text textStyle={'b17'}>Economy</Text>
									<Text textStyle={'r13'} color={'grey500'} mb={0}>
										Ford Tarus or similar
									</Text>

									<Stack horizontal left mid >
										<Image width={'16px'} src={Passengers} ml={'1px'} />
										<Text textStyle={'r13'} ml={0} pt={'2px'}>7</Text>

										<Image width={'16px'} src={Passengers} ml={'1px'} />
										<Text textStyle={'r13'} ml={0} pt={'2px'}>7</Text>

										<Image width={'16px'} src={Passengers} ml={'1px'} />
										<Text textStyle={'r13'} ml={0} pt={'2px'}>7</Text>
									</Stack>
								</Stack>
							</View>
						</Stack>
					</Card>
				</ViewMobile>
			</ThemeWrapper>
		);
	}
}
