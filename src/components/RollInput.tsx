import React, { Component } from 'react';

type RollInputProps = {
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
