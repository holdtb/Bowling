import React, { Component } from 'react';
import { RollInput } from './RollInput';

type RollInputContainerProps = {
  onRoll: Function;
  pinsRemaining: number;
  currentRoll: number;
  frameNumber: number;
  gameOver: Boolean;
};
export class RollInputContainer extends Component<RollInputContainerProps, {}> {
  constructor(props: RollInputContainerProps) {
    super(props);
  }

  render() {
    const isEnabled = (pinNumber: number) =>
      this.props.pinsRemaining >= pinNumber && !this.props.gameOver;
    const rollInputs = range(0, 10).map((_, num) => {
      return (
        <RollInput
          key={num}
          frameNumber={this.props.frameNumber}
          rollCount={this.props.currentRoll}
          enabled={isEnabled(num)}
          pins={num}
          onClickHandler={this.props.onRoll}
        />
      );
    });

    return <div style={{ marginBottom: 25 }}>{rollInputs}</div>;
  }
}

function range(start: number, end: number) {
  return [...Array(1 + end - start).keys()].map(v => start + v);
}
