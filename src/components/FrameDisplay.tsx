import React, { Component } from 'react';
import { Frame } from '../models/';

const frameContainerStyle = { height: 75, width: 75, border: '1px solid black', margin: 3 };
const frameHeaderStyle = { backgroundColor: 'red', color: 'white' };

type FrameDisplayProps = {
  gameFrameNumber: number;
  rolls: String;
  frame: Frame;
  index: number;
};
export class FrameDisplay extends Component<FrameDisplayProps, {}> {
  render() {
    const displayRunningScore = this.props.gameFrameNumber >= this.props.index + 1;
    const isActive =
      this.props.gameFrameNumber == this.props.index + 1 ||
      (this.props.gameFrameNumber == 10 && this.props.index == 10);
    const header = <div style={frameHeaderStyle}>Frame {this.props.frame.number}</div>;
    const framePts = displayRunningScore ? <div>{this.props.frame.framePts}</div> : '';
    return (
      <div
        style={{
          ...frameContainerStyle,
          backgroundColor: isActive ? 'yellow' : 'white'
        }}>
        {header}
        {this.props.rolls}
        {framePts}
      </div>
    );
  }
}
