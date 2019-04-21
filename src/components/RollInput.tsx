import React, { Component } from 'react';

export type RollInputProps = {
  onClickHandler: Function;
  pins: number;
  enabled: boolean;
  rollCount: number;
  frameNumber: number;
};
export class RollInput extends Component<RollInputProps, {}> {
  constructor(props: RollInputProps) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.onClickHandler(this.props.pins);
  }
  render() {
    let altDisplay = '';
    if (this.props.pins == 0) altDisplay = 'Gutter';
    if (this.props.pins == 10 && this.props.rollCount == 0) altDisplay = 'Strike';
    return (
      <button
        disabled={!this.props.enabled}
        style={{ padding: 10, margin: 5 }}
        onClick={this.handleOnClick}>
        {altDisplay || this.props.pins}
      </button>
    );
  }
}

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
