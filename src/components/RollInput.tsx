import React, { Component } from 'react';

export type RollInputProps = {
  onClickHandler: Function;
  rollNumber: number;
  altDisplay?: string;
};
export class RollInput extends Component<RollInputProps, {}> {
  constructor(props: RollInputProps) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.onClickHandler(this.props.rollNumber);
  }
  render() {
    return (
      <button style={{ padding: 10, margin: 5 }} onClick={this.handleOnClick}>
        {this.props.altDisplay || this.props.rollNumber}
      </button>
    );
  }
}

type RollInputContainerProps = {
  onRoll: Function;
};
export class RollInputContainer extends Component<RollInputContainerProps, {}> {
  constructor(props: RollInputContainerProps) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginBottom: 25 }}>
        <RollInput rollNumber={0} altDisplay="Gutter" onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={1} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={2} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={3} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={4} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={5} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={6} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={7} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={8} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={9} onClickHandler={this.props.onRoll} />
        <RollInput rollNumber={10} altDisplay="Strike" onClickHandler={this.props.onRoll} />
      </div>
    );
  }
}
