import React, { Component } from 'react';
import { Stack } from 'kit';
import theme from '../theme';

export default class ViewMobile extends Component {
    render() {
      return (
        <Stack vertical stretch bg={theme.colors.grey100} width={'375px'} height={'100vh'} m={'auto'}  p={3} >
            
            {this.props.children}
  
           
  
  
  
         
      </Stack>
      )
    }
  }
  