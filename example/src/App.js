import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
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
          <Card curved mb={3} boxShadow={0}>
          
            <Stack horizontal left p={3}>

              <Stack vertical center wraped width={'30%'} >
                <Image src={carImage} mb={1} />
                <Image src={suppImage} width={'50%'} />
              </Stack>

              <Stack vertical left ml={3} wraped width={'70%'} >
                
              
                <Text m bold > Economy </Text>
                
                <Text s color={'grey600'}>Vauxhall or simmilar</Text>
              </Stack>

            </Stack>





          </Card>


        </ViewMobile>

      </ThemeProvider>
    );
  }
}

