import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { View, Card, theme, Image } from 'kit';
import carImage from './Assets/CarImage.jpg';
import suppImage from './Assets/SuppImage.png';


//import Card from 'kit/example/src/Components/Card';
import ViewMobile from './Views/ViewMobile';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View horizontal center bg={'grey100'} width={'100%'} height={'100vh'} >
          
          <ViewMobile>

            <Card horizontal stretch curved >

              <View vertical center top width={'30%'}>

                <Image src={carImage} />
                <Image src={suppImage} width={'50%'}/>

              </View>

               <View vertical mid width={'65%'} >

                 <View width={'40%'} height={'15px'} curved bg={'grey200'} mb={2} />

                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 <View width={'80%'} height={'10px'} curved bg={'grey200'} mb={1} />
                 

                  
                
              

              </View>

            </Card>




          </ViewMobile>

        </View>
      </ThemeProvider>
    );
  }
}
