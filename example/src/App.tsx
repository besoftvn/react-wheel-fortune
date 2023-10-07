import React from 'react'

import { BasicWheel } from 'react-wheel-fortune'
import 'react-wheel-fortune/dist/index.css'

const App = () => {
  let items: any[] = [
    <p>BESOFT
      <img
        height={20}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png' />
    </p>,
    "WIN",
    "LOST",
    "HELLO"]
  let wheelColor: string = "#0092ca"
  return <BasicWheel
    items={items}
    color={wheelColor}
    result={3} // index of value in array
  />
}

export default App
