import React, { Component } from 'react';
import Game from '../logic/Game';
import TenthFrame from '../models/TenthFrame';
import Frame from '../models/Frame';

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

type FrameDisplayContainerProps = {
  game: Game;
};
export class FrameDisplayContainer extends Component<FrameDisplayContainerProps, {}> {
  constructor(props: FrameDisplayContainerProps) {
    super(props);
  }

  getStandardFrames() {
    const standardFrames = this.props.game.frames.slice(0, this.props.game.frames.length - 1);
    return standardFrames.map((frame, index) => {
      return (
        <FrameDisplay
          key={index}
          gameFrameNumber={this.props.game.frameNumber}
          index={index}
          frame={frame}
          rolls={`${frame.rollOne || '_'} , ${frame.rollTwo || '_'}`}
        />
      );
    });
  }

  getTenthFrame() {
    const tenthFrame = this.props.game.frames[this.props.game.frames.length - 1] as TenthFrame;
    return (
      <FrameDisplay
        index={10}
        frame={tenthFrame}
        gameFrameNumber={this.props.game.frameNumber}
        rolls={`${tenthFrame.rollOne || '_'} , ${tenthFrame.rollTwo ||
          '_'}, ${tenthFrame.rollThree || '_'}`}
      />
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {this.getStandardFrames()}
        {this.getTenthFrame()}
      </div>
    );
  }
}
