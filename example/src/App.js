import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, Card, theme, Image, Stack } from 'kit';
import carImage from './Assets/CarImage.jpg';
import suppImage from './Assets/SuppImage.png';
import passengers from './Assets/Passengers.png';
import doors from './Assets/Doors.png';
import bags from './Assets/Bags.png';
import tick from './Assets/Tick.png';
import tickGreen from './Assets/TickGreen.png';


//import Card from 'kit/example/src/Components/Card';
import ViewMobile from './Views/ViewMobile';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ViewMobile>
          <Card curved mb={3} boxShadow={0}>

            <Stack horizontal left p={3}>

              <Stack vertical center wraped width={'25%'} >
                <Image src={carImage} mb={1} />
                <Image src={suppImage} width={'50%'} />
              </Stack>

              <Stack vertical left ml={3} wraped width={'75%'} >


                <Text m bold > Economy </Text>
                <Text s color={'grey600'} >Vauxhall or simmilar</Text>

                <Stack horizontal top mb={1}  >
                  <Image src={passengers} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >3</Text>

                  <Image src={doors} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >4</Text>

                  <Image src={bags} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >1</Text>


                </Stack>

                <Stack horizontal mb={1} >
                  <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >Automatic </Text>

                  <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >Unlimited Mileage </Text>



                </Stack>

                <Stack horizontal>
                  <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >Free Cancellation</Text>
                </Stack>
                <Stack horizontal>
                  <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >Reserve now, pay later.</Text>
                </Stack>
                <Stack horizontal>
                  <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
                  <Text s color={'grey600'} mr={2} >Insurance included</Text>
                </Stack>

              </Stack>

            </Stack>





          </Card>


        </ViewMobile>

      </ThemeProvider>
    );
  }
}

