import React, { Component } from 'react';

import { View, Text, Image, Stack, ThemeWraper } from 'kit';
import carImage from './Assets/CarImage.jpg';
import suppImage from './Assets/SuppImage.png';
import passengers from './Assets/Passengers.png';
import doors from './Assets/Doors.png';
import bags from './Assets/Bags.png';
import tick from './Assets/Tick.png';
import tickGreen from './Assets/TickGreen.png';
import theme from './theme';


//import Card from 'kit/example/src/Components/Card';
import ViewMobile from './Views/ViewMobile';

const CardLeft = (props) => {
  return (
    <Stack vertical center width={'25%'} >
      
        <Image src={carImage} mb={1} />
      
      <Image src={suppImage} width={'50%'} />
    </Stack>
  );
};

const CarSpec = (props) => {
  return (
    <Stack vertical>

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

      <Stack horizontal wraped mb={1} >
        <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
        <Text s color={'grey600'} mr={2} >Automatic </Text>

        <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
        <Text s color={'grey600'} mr={2} >Unlimited Mileage </Text>

      </Stack>
    </Stack>
  );
};

const ConfidenceMessaging = (props) => {
  return (
    <Stack vertical>

      <Stack horizontal>
        <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
        <Text s color={'grey600'} >Free Cancellation</Text>
      </Stack>

      <Stack horizontal>
        <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
        <Text s color={'grey600'} >Reserve now, pay later.</Text>
      </Stack>

      <Stack horizontal>
        <Image src={tickGreen} width={'16px'} mt={'2px'} mr={2} />
        <Text s color={'grey600'} >Insurance included</Text>
      </Stack>

    </Stack>
  );
};







export default class App extends Component {
  render() {
    return (
      <ThemeWraper theme={theme}>
        <ViewMobile>





          <View vertical curved mb={3} m={3} bg={'white'}>

            <Stack horizontal split left p={3}>



              <Stack vertical left wraped width={'75%'} >

                <CarSpec />


              </Stack>
              <CardLeft />

            </Stack>
            <Stack vertical width={'100%'} >
              <View width={'100%'} height={'1px'} bg={'grey100'} />
              <View p={3}>
                <ConfidenceMessaging />
              </View>
              <View width={'100%'} height={'1px'} bg={'grey100'} />
              <Stack horizontal split mid width={'100%'} >
                <Text width={'30%'} m={3} >$200</Text>
                
                  <Stack bounce horizontal bg={'brandYellow'} color={'grey800'} rounded boxShadow={1} center mid m={3} p={3}>
                    <Text s medium> Reserve Now</Text>
                  </Stack>
                

              </Stack>


            </Stack>


          </View>



        </ViewMobile>
        </ThemeWraper>
    );
  }
}

