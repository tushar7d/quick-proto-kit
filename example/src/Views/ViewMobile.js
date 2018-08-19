import React, { Component } from 'react';
import { View, theme } from 'kit';

export default class ViewMobile extends Component {
    render() {
      return (
        <View  vertical bg={theme.colors.grey300}  width={'375px'}  >
            
            {this.props.children}
  
           
  
  
  
         
      </View>
      )
    }
  }
  