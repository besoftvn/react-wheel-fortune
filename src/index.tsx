import * as React from 'react'
import  './styles.module.css'
import ColoredWheel from './components/ColoredWheel';

interface Props {
  text: string
}

interface BasicWheelProps {
  items: any[];
  size?: number,
  fontSize?: number,
  spacing?: number,
  color?: string,
  wheelTurn?: number,
  duration?: number,
  timeReset?: number,
  borderSize?: number,
  result?: number | string,
  textColor?: string,
}
export const ExampleComponent = ({ text }: Props) => {
  return <div className='test'>Example Component hello 123342341: {text}</div>
}


export const BasicWheel = ({ items, size, fontSize, spacing, color, wheelTurn, duration, timeReset, borderSize, result, textColor }: BasicWheelProps) => {
  return <ColoredWheel
    items={items}
    wheelSize={size}
    border={borderSize}
    wheelSpacing={spacing}
    result={result}
    wheelTurn={wheelTurn}
    WheelColor={color}
    timeReset={timeReset}
    duration={duration}
    fontSize={fontSize}
    textColor={textColor}
  />
}
