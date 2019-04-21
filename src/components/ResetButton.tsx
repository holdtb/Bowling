import React from 'react';

type ResetButtonProps = {
  onClickHandler: Function;
};
export const ResetButton = (props: ResetButtonProps) => {
  return <button onClick={() => props.onClickHandler}>Reset Game</button>;
};
