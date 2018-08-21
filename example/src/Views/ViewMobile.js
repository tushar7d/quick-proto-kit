import React, { Component } from 'react';
import { Stack, theme, } from 'kit';

export default class ViewMobile extends Component {
    render() {
      return (
        <Stack vertical stretch bg={theme.colors.grey300} width={'375px'} height={'100vh'} m={'auto'}  p={3} >
            
            {this.props.children}
  
           
  
  
  
         
      </Stack>
      )
    }
  }
  