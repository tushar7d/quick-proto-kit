import React, { Component } from 'react';

import {View} from 'kit';

export default class App extends Component {
  render () {
    return (
      <View vertical center mid bg={'#f5f5f5'} >
        <View  p={12} m={12} height={'50px'} width={'50px'} bg={'#1f1f1f'} borderRadius = {'1%'}/>
        <View  p={12} m={12} height={'500px'} width={'500px'} bg={'#1f1f1f'} borderRadius = {'1%'} />
        

        
        

      </View>
    )
  }
}
