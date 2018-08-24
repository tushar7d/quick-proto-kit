# Quick Prototyping kit

> 

[![NPM](https://img.shields.io/npm/v/kit.svg)](https://www.npmjs.com/package/kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[![ Quick-Proto-Kit](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r0vr59wjvm?module=%2Fsrc%2FApp.js)

## Documentation

https://quick-proto-kit.gitbook.io/go

## Install

Quick proto Kit is based on styled-compoenents, styled-system and styled-map. To use it you must install all of these.

```bash

npm install --save styled-components styled-map styled-system

npm install --save quick-proto-kit
```
## Usage

```jsx
import React, { Component } from 'react'

import {View, Text, Image, Stack} from 'quick-proto-kit'

class Example extends Component {
  render () {
    return (
      <Stack horizontal mid bg={'#ffffff'} height={'200px'} >
          <View width={'100px'} height={'100px'} bg={'#f5f5f5'} />
          <View width={'100px'} height={'100px'} bg={'#efeff4'} />

      </Stack>

    )
  }
}
```

# Documentation

>

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
