import React from 'react';

type ResetButtonProps = {
  onClickHandler: Function;
};
export const ResetButton = (props: ResetButtonProps) => {
  return (
    <button style={{ padding: 5, margin: 5 }} onClick={() => props.onClickHandler()}>
      Reset Game
    </button>
  );
};
