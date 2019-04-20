import React, { Component } from 'react';
import { TRoll } from '../types';
import Game from '../logic/Game';
import TenthFrame from '../models/TenthFrame';

export type StandardFrameDisplayProps = {
  frameNumber: number;
  rollOne?: TRoll;
  rollTwo?: TRoll;
};
export class StandardFrameDisplay extends Component<StandardFrameDisplayProps, {}> {
  render() {
    return (
      <div style={{ height: 75, width: 75, border: '1px solid black' }}>
        <div style={{ backgroundColor: 'red', color: 'white' }}>Frame {this.props.frameNumber}</div>
        {this.props.rollOne || '_'} , {this.props.rollTwo || '_'}
      </div>
    );
  }
}

export type TenthFrameDisplayProps = {
  rollOne?: TRoll;
  rollTwo?: TRoll;
  rollThree?: TRoll;
};
export class TenthFrameDisplay extends Component<TenthFrameDisplayProps, {}> {
  render() {
    return (
      <div style={{ height: 75, width: 75, border: '1px solid black' }}>
        <div style={{ backgroundColor: 'red', color: 'white' }}>Frame 10</div>
        {this.props.rollOne || '_'} , {this.props.rollTwo || '_'} , {this.props.rollThree || '_'}
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
    const standardFrames = this.props.game.frames.slice(0, 8);
    const stdFrameDisplays = standardFrames.map((frame, index) => {
      return (
        <StandardFrameDisplay
          key={index}
          frameNumber={index}
          rollOne={frame.rollOne}
          rollTwo={frame.rollTwo}
        />
      );
    });
    const tenthFrame = this.props.game.frames[this.props.game.frames.length - 1] as TenthFrame;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {stdFrameDisplays}
        <TenthFrameDisplay
          rollOne={tenthFrame.rollOne}
          rollTwo={tenthFrame.rollTwo}
          rollThree={tenthFrame.rollThree}
        />
      </div>
    );
  }
}
