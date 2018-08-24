import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { View,Text, Card, theme, Image, Stack } from 'kit';
import carImage from './Assets/CarImage.jpg';
import suppImage from './Assets/SuppImage.png';
import passengers from './Assets/Passengers.png';
import doors from './Assets/Doors.png';
import bags from './Assets/Bags.png';
import tick from './Assets/Tick.png';
import tickGreen from './Assets/TickGreen.png';


//import Card from 'kit/example/src/Components/Card';
import ViewMobile from './Views/ViewMobile';

const CardLeft = (props) =>
{
  return(
          <Stack vertical center width={'25%'} >
                <Image src={carImage} mb={1} />
                <Image src={suppImage} width={'50%'} />
          </Stack>
        );
};

const CarSpec = (props) =>
{
  return(
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

  <Stack horizontal mb={1} >
    <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
    <Text s color={'grey600'} mr={2} >Automatic </Text>

    <Image src={tick} width={'16px'} mt={'2px'} mr={2} />
    <Text s color={'grey600'} mr={2} >Unlimited Mileage </Text>

  </Stack>
</Stack>
        );
};

const ConfidenceMessaging = (props) =>
{
  return(
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
      <ThemeProvider theme={theme}>

          <ViewMobile>

                <Card vertical curved mb={3} boxShadow={0}>

                      <Stack horizontal p={3}>

                            

                            <Stack vertical left  wraped width={'75%'} >

                                  <CarSpec />
                                  

                            </Stack>
                            <CardLeft />

                      </Stack>
                      <Stack vertical width={'100%'} > 
                      <View width={'100%'} height={'1px'} bg={'grey100'}  />
                      <View p={3}>
                      <ConfidenceMessaging />
                      </View>
                      <View width={'100%'} height={'1px'} bg={'grey100'}  />
                      <Stack horizontal split mid width={'100%'} >
                        <Text width={'30%'}m={3} >$200</Text>
                        <Stack horizontal  width={'120px'} height={'36px'} bg={'brandYellow'} color={'grey800'} curved boxShadow={1} center mid m={3} p={2}>
                          <Text m medium> Reserve Now</Text>
                        </Stack>

                      </Stack>

                      
                      </Stack>
                     

                </Card>

          </ViewMobile>
        
      </ThemeProvider>
            );
  }
}

