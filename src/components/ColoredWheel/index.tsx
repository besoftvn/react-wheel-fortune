import React from 'react'

interface WheelProps {
  items: any[]
  wheelSize?: number
  fontSize?: number
  wheelSpacing?: number
  WheelColor?: string
  wheelTurn?: number
  duration?: number
  timeReset?: number
  border?: number
  result?: number | string
  textColor?: string
  disable?: boolean
  onFinished?: (result?: any) => void
  onStart?: () => void
}

interface WheelState {
  selectedItem: number | null | any
}

export default class ColoredTextWheel extends React.Component<
  WheelProps,
  WheelState
> {
  constructor(props: WheelProps) {
    super(props)
    this.state = {
      selectedItem: null,
    }
    this.selectItem = this.selectItem.bind(this)
  }

  selectItem() {
    if (!this.props.disable) {
      if (this.state.selectedItem === null) {
        const selectedItem = Math.floor(Math.random() * this.props.items.length)
        if (this.props.result) {
          this.setState({selectedItem: this.props.result})
          this.props.onFinished &&
            setTimeout(
              () => this.props.onFinished && this.props.onFinished(),
              (this.props.duration && this.props.duration * 1000) || 5000
            )
        } else {
          this.setState({selectedItem})
          this.props.onFinished &&
            setTimeout(
              () =>
                this.props.onFinished && this.props.onFinished(selectedItem),
              (this.props.duration && this.props.duration * 1000) || 5000
            )
        }
      } else {
        this.setState({selectedItem: null})
        setTimeout(this.selectItem, 500)
      }
    }
  }

  render() {
    const {selectedItem} = this.state
    const {items} = this.props
    const wheelContainer: any = {
      '--wheel-border': `${
        (this.props.wheelSize &&
          this.props.wheelSize + 2 * (this.props.border || 5)) ||
        210
      }px`,
      '--wheel-color': this.props.WheelColor || '#da3768',
    }
    const wheelVars: any = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
      '--wheel-size': `${this.props.wheelSize || 200}px`,
      '--wheel-font-size': `${this.props.fontSize || 10}px`,
      '--wheel-slice-spacing': `${this.props.wheelSpacing || 50}px`,
      '--wheel-border-size': `${this.props.border || 5}px`,
      '--wheel-color': this.props.WheelColor || '#da3768',
      '--neutral-color': 'white',
      '--text-color': this.props.textColor || '#fff',
      '--nb-turn': this.props.wheelTurn || 5,
      '--spinning-duration': `${this.props.duration || 5}s`,
      '--reset-duration': `${this.props.timeReset || 0.25}s`,
    }

    const wheelItem: any = (index: any) => {
      return {
        '--item-nb': index,
      }
    }
    const spinning: any = selectedItem !== null ? 'spinning' : ''

    const handleClick = () => {
      if (!this.props.disable) {
        this.selectItem()
        this.props.onStart && this.props.onStart()
      }
    }
    return (
      <div>
        <div className="wheelContainer" style={wheelContainer}>
          <div
            className={`wheel ${spinning} ${
              this.props.disable && 'cursor-not-allowed'
            }`}
            style={wheelVars}
            onClick={handleClick}>
            {items.map((item, index) => (
              <div className="wheelItem" key={index} style={wheelItem(index)}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
