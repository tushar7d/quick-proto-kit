import React, { Component } from 'react';

import { View, Text } from 'kit';

export default class App extends Component {
  render() {
    return (
      <View horizontal split strech bg={'#f5f5f5'}>

        <View width={'30%'}>
          <Text p={12} textAlign={'center'}  fontSize={'2em'}>Heading</Text>
        </View>
        
        <View width={'70%'} bg={'#efeff4'} horizontal center mid>
          <View>
          <Text width={'300px'} textAlign={'center'} fontSize={'1.2em'} fontWeight={600}>Section 2</Text>
          <Text width={'300px'} textAlign={'center'} fontSize={'1em'}>more text to be added</Text>
          </View>
        </View>





      </View>
    )
  }
}
