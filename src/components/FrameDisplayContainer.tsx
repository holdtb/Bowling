import React, { Component } from 'react';
import Game from '../Game';
import { FrameDisplay } from './';
import { TenthFrame } from '../models';

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
