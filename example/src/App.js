import React, { Component } from 'react';

import { View, Text } from 'kit';

export default class App extends Component {
  render() {
    return (
      <View horizontal split strech bg={'#f5f5f5'}>

        <View width={'40%'}>
          <Text p={12} textAlign={'center'}  fontSize={'2em'}>Quick Proto Kit</Text>
        </View>
        
        <View width={'60%'} bg={'#efeff4'} horizontal center mid>
          <View>
          <Text width={'300px'} textAlign={'center'} fontSize={'1.2em'} fontWeight={600}>V 0.0.3</Text>
          <Text width={'300px'} textAlign={'center'} fontSize={'1em'}>more to come</Text>
          </View>
        </View>
    </View>
    )
  }
}
