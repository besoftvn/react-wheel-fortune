import React from 'react';
import './styles.css';

interface WheelProps {
    items: any[];
    wheelSize?: number,
    fontSize?: number,
    wheelSpacing?: number,
    WheelColor?: string,
    wheelTurn?: number,
    duration?: number,
    timeReset?: number,
    border?: number,
    result?: number | string,
    textColor?: string,

}

interface WheelState {
    selectedItem: number | null;
}

export default class ColoredWheel extends React.Component<WheelProps, WheelState> {
    constructor(props: WheelProps) {
        super(props);
        this.state = {
            selectedItem: null,
        };
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem() {
        if (this.state.selectedItem === null) {
            const selectedItem = Math.floor(Math.random() * this.props.items.length);

            this.setState({ selectedItem });
        } else {
            this.setState({ selectedItem: null });
            setTimeout(this.selectItem, 500);
        }
    }

    render() {
        const { selectedItem } = this.state;
        const { items } = this.props;
        const wheelContainer: any = {
            '--wheel-border': `${this.props.wheelSize && (this.props.wheelSize + 2 * (this.props.border || 5)) || 210}px`,
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
            '--text-color': this.props.textColor || "#fff",
            '--nb-turn': this.props.wheelTurn || 5,
            '--spinning-duration': `${this.props.duration || 5}s`,
            '--reset-duration': `${this.props.timeReset || 0.25}s`,
        };
        console.log(selectedItem)
        const wheelItem: any = (index: any) => {
            return {
                '--item-nb': index,
            }
        };
        const spinning: any = selectedItem !== null ? 'spinning' : '';

        return (
            <div>

                <div className="wheel-container" style={wheelContainer}>
                    <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
                        {items.map((item, index) => (
                            <div className="wheel-item" key={index} style={wheelItem(index)}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}