# Quick Prototyping kit

> 

[![NPM](https://img.shields.io/npm/v/kit.svg)](https://www.npmjs.com/package/kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save quick-proto-kit styled-components styled-map styled-system


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
