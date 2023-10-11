# react-wheel-fortune

> React Wheel Fortune

[![NPM](https://img.shields.io/npm/v/react-wheel-fortune.svg)](https://www.npmjs.com/package/react-wheel-fortune) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-wheel-fortune
```

```bash
npm install --save react-wheel-fortune --legacy-peer-deps
```

```bash
yarn add react-wheel-fortune
```



| Properties     | default value | Optional |
| -------------- | :-----------: | -------: |
| items          |      NA       |       No |
| size           |      200      |      Yes |
| fontSize       |      10       |      Yes |
| spacing        |      50       |      Yes |
| color          |   '#da3768'   |      Yes |
| wheelTurn      |       5       |      Yes |
| duration       |       5       |      Yes |
| timeReset      |      0.25     |      Yes |
| borderSize     |       5       |      Yes |
| result         |     RANDOM    |      Yes |
| disable        |     false     |      Yes |
| onFinished     |      N/A      |      Yes |
| onStart        |      N/A      |      Yes |


## Usage

```tsx
import React from 'react'

import { BasicWheel } from 'react-wheel-fortune'
import 'react-wheel-fortune/dist/index.css'

const App = () => {
  let items: any[] = [
    <p>BESOFT
      <img
        height={20}
        src='***.png' />
    </p>,
    "WIN1",
    "LOST",
    "HELLO"]
  let wheelColor: string = "#000"
  return <BasicWheel
    items={items}
    color={wheelColor}
    result={3} // index of value in array (if not set it random result)
    textColor='#fff'
  />
}

export default App

```


## DEMO

![before spinning](./demo.png)



[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://paypal.me/bettv99?country.x=VN&locale.x=vi_VN)

## License

MIT © [besoftvn](https://github.com/besoftvn)


