# Quick Prototyping kit

> 

[![NPM](https://img.shields.io/npm/v/kit.svg)](https://www.npmjs.com/package/kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[![ Quick-Proto-Kit](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r0vr59wjvm?module=%2Fsrc%2FApp.js)

## Documentation

https://quick-proto-kit.gitbook.io/go

## Install

Quick proto Kit is based on styled-compoenents. To use it you must install all of these.

```bash

npm install --save styled-components

npm install --save quick-proto-kit
```

## Usage

```jsx
import React, { Component } from 'react'

import {View, Text, Image, Stack} from 'quick-proto-kit'

class Example extends Component {
  render () {
    return (
      <Stack.Horizontal mid bg={'#ffffff'} height={'200px'} >
          <View width={'100px'} height={'100px'} bg={'#f5f5f5'} />
          <View width={'100px'} height={'100px'} bg={'#efeff4'} />

      </Stack.Horizontal>

    )
  }
}
```

# Documentation

>

## Stack

### Layout

Property  | Meaning | Syntac
------------ | ------------- | -------------
horizontal | Align all child elements horizontally | ```  <Stack.Horizontal /> ```
vertical | Align all child elements vertically | ```  <Stack.Vertical /> ```



### Alignment

Property  | Meaning | Syntac
------------ | ------------- | -------------
center | center all child element horizontaly | ```  <Stack.Horizontal|Vertical center /> ```
mid | center all child element vertically | ```  <Stack.Horizontal|Vertical mid /> ```
top | Top Align all child elements  | ```  <Stack.Horizontal|Vertical top /> ```
bottom | Bottom Align all child elements  | ```  <Stack.Horizontal|Vertical bottom /> ```
left | Left Align all child elements  | ```  <Stack.Horizontal|Vertical left /> ```
right | Right Align all child elements  | ```  <Stack.Horizontal|Vertical right /> ```




## View

### Dimensions

Property  | syntax
------------ | -------------
Height | ```  <View height={'value'} /> ```
Width | ```  <View width={'value'} /> ```


### Colors

Property  | syntax | detail
------------ | ------------- | -------------
Background color | ```  <View bg={'value'} /> ``` | Value: '#ffffff' or 'themeColor' 
Text color | ```  <View color={'value'} /> ``` | Value: '#ffffff' or 'themeColor' 

### Shadow

Property  | syntax | detail
------------ | ------------- | -------------
Shadow | ```  <View boxShadow={'value'} /> ``` | Value: 'themeShadow' 




### Border Radius

Property  |  purpose    |syntax 
------------ | ------------- | -------------
specific | Add a border radius of '10px' | ```  <View borderRadius={'10px'}  /> ```
curved | Add a border radius of 6px | ```  <View curved  /> ```
more-curved | Add a border radius of 12px | ```  <View more-curved  /> ```
round | Add a border radius of 100%, this will make a circle if the view is squre | ```  <View curved  /> ```
default | No border | -

## Text




### Font Size

Parameter (case sensitive) | Value
------------ | -------------
default | 13px
tiny | 11px
xs | 13px
s | 15px
m | 17px
l | 20px
xl | 23px
xxl | 27px
xxxl | 34px
huge | 45px


### Font Weight

Parameter (case sensitive) | Value
------------ | -------------
default | regular
bold | bold
medium | medium
light | light


### Font Align

Parameter (case sensitive) | Value
------------ | -------------
default | left
left | left
right | right
center | center

### Display

Parameter (case sensitive) | Value
------------ | -------------
default | block
inline | inline








## License

MIT © [tushar7d](https://github.com/tushar7d)
