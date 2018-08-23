# Quick Prototyping kit

> 

[![NPM](https://img.shields.io/npm/v/kit.svg)](https://www.npmjs.com/package/kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
You can try out the library at codesandbox!
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

## License

MIT © [tushar7d](https://github.com/tushar7d)
