import React, { Component } from 'react';
import { Frame } from '../models/';

const frameContainerStyle = { height: 75, width: 75, border: '1px solid black', margin: 3 };
const frameHeaderStyle = { backgroundColor: 'red', color: 'white' };

type FrameDisplayProps = {
  gameFrameNumber: number;
  displayText: String;
  frame: Frame;
  index: number;
};

export const FrameDisplay = (props: FrameDisplayProps) => {
  const displayRunningScore =
    props.gameFrameNumber >= props.index + 1 || props.gameFrameNumber == 10;
  const isActive =
    props.gameFrameNumber == props.index + 1 || (props.gameFrameNumber == 10 && props.index == 10);
  const header = <div style={frameHeaderStyle}>Frame {props.frame.number}</div>;
  const framePts = displayRunningScore ? <div>{props.frame.framePts}</div> : '';
  return (
    <div
      style={{
        ...frameContainerStyle,
        backgroundColor: isActive ? 'yellow' : 'white'
      }}>
      {header}
      {props.displayText}
      {framePts}
    </div>
  );
};
