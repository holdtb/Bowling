import React, { Component } from 'react';
import Game from '../Game';
import { FrameDisplay } from './';
import { TenthFrame } from '../models';

type FrameDisplayContainerProps = {
  game: Game;
};
const _getRollDisplayText = (roll: number) => {
  if (roll == 0) {
    return '-';
  }

  if (roll == undefined || roll == null) return '_';

  return roll;
};

export class FrameDisplayContainer extends Component<FrameDisplayContainerProps, {}> {
  constructor(props: FrameDisplayContainerProps) {
    super(props);
  }

  getStandardFrames() {
    const standardFrames = this.props.game.frames.slice(0, this.props.game.frames.length - 1);
    return standardFrames.map((frame, index) => {
      const rollOneDisplay = _getRollDisplayText(frame.rollOne);
      const rollTwoDisplay = _getRollDisplayText(frame.rollTwo);
      const displayText = `${rollOneDisplay} , ${rollTwoDisplay}`;
      return (
        <FrameDisplay
          key={index}
          gameFrameNumber={this.props.game.frameNumber}
          index={index}
          frame={frame}
          displayText={displayText}
        />
      );
    });
  }

  render() {
    const tenthFrame = this.props.game.frames[this.props.game.frames.length - 1] as TenthFrame;
    const rollOneDisplay = _getRollDisplayText(tenthFrame.rollOne);
    const rollTwoDisplay = _getRollDisplayText(tenthFrame.rollTwo);
    const rollThreeDisplay = _getRollDisplayText(tenthFrame.rollThree);
    const displayText = `${rollOneDisplay} , ${rollTwoDisplay} , ${rollThreeDisplay}`;
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {this.getStandardFrames()}
        <FrameDisplay
          index={10}
          frame={tenthFrame}
          gameFrameNumber={this.props.game.frameNumber}
          displayText={displayText}
        />
      </div>
    );
  }
}
