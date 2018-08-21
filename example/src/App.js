import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { Text, Card, theme, Image, Stack } from 'kit';
import carImage from './Assets/CarImage.jpg';
import suppImage from './Assets/SuppImage.png';


//import Card from 'kit/example/src/Components/Card';
import ViewMobile from './Views/ViewMobile';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ViewMobile>
          <Card horizontal left p={3} curved mb={3} >
            <Stack vertical center wrap width={'30%'}   >
              <Image src={carImage} mb={3} />
              <Image src={suppImage} width={'50%'} />
            </Stack>
            <Stack vertical left  ml={3} wrap width={'70%'} >
              <Text fontSize={'21px'} >hello</Text>
            </Stack>



          </Card>


        </ViewMobile>

      </ThemeProvider>
    );
  }
}

/*
 <Stack horizontal center bg={'grey100'} width={'100%'} height={'100vh'} >
          
          <ViewMobile>

            <Card horizontal stretch curved  width={'100%'}>

              <Stack vertical center top width={'30%'}>

                <Image src={carImage} />
                <Image src={suppImage} width={'50%'}/>

              </Stack>

               <Stack vertical mid width={'65%'} >

                 <View width={'40%'} height={'15px'} curved bg={'grey200'} mb={2} />

                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 

                  
                
              

              </Stack>

            </Card>




          </ViewMobile>

        </Stack>
        */