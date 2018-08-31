import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';


export default class ThemeWraper extends Component {
    render() {
      return (      
      <ThemeProvider theme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
      )
    }
  }
  