import React, { Component } from 'react';
import Game from '../logic/Game';
import TenthFrame from '../models/TenthFrame';
import Frame from '../models/Frame';

const frameContainerStyle = { height: 75, width: 75, border: '1px solid black', margin: 3 };
const frameHeaderStyle = { backgroundColor: 'red', color: 'white' };

type StandardFrameDisplayProps = {
  frame: Frame;
};
export class StandardFrameDisplay extends Component<StandardFrameDisplayProps, {}> {
  render() {
    return (
      <div style={frameContainerStyle}>
        <div style={frameHeaderStyle}>Frame {this.props.frame.number}</div>
        {this.props.frame.rollOne || '_'} , {this.props.frame.rollTwo || '_'}
      </div>
    );
  }
}

type TenthFrameDisplayProps = {
  frame: TenthFrame;
};
export class TenthFrameDisplay extends Component<TenthFrameDisplayProps, {}> {
  render() {
    const frame = this.props.frame;
    return (
      <div style={frameContainerStyle}>
        <div style={frameHeaderStyle}>Frame 10</div>
        {frame.rollOne || '_'} , {frame.rollTwo || '_'} , {frame.rollThree || '_'}
      </div>
    );
  }
}

type FrameDisplayContainerProps = {
  game: Game;
};
export class FrameDisplayContainer extends Component<FrameDisplayContainerProps, {}> {
  constructor(props: FrameDisplayContainerProps) {
    super(props);
  }

  render() {
    const standardFrames = this.props.game.frames.slice(0, this.props.game.frames.length - 1);
    const stdFrameDisplays = standardFrames.map((frame, index) => {
      return <StandardFrameDisplay key={index} frame={frame} />;
    });
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {stdFrameDisplays}
        <TenthFrameDisplay
          frame={this.props.game.frames[this.props.game.frames.length - 1] as TenthFrame}
        />
      </div>
    );
  }
}
