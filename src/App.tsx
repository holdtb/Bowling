import React, { Component } from 'react';
import Game from './Game';
import { RollInputContainer, ResetButton, FrameDisplayContainer } from './components/';
import { TRoll } from './types';

type AppState = {
  game: Game;
  totalScore: number;
  rolls: Array<TRoll>;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      game: new Game(),
      totalScore: 0,
      rolls: []
    };
    this.handleRoll = this.handleRoll.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.setState({
      game: new Game(),
      totalScore: 0
    });
  }

  handleRoll(roll: TRoll) {
    let game = this.state.game;
    game.roll(roll);
    this.setState({
      game,
      totalScore: game.totalScore
    });
  }

  render() {
    return (
      <div style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center' }}>
        <RollInputContainer
          gameOver={this.state.game.gameOver}
          frameNumber={this.state.game.frameNumber}
          currentRoll={this.state.game.rollCount}
          pinsRemaining={this.state.game.pinsRemaining}
          onRoll={this.handleRoll}
        />
        <FrameDisplayContainer game={this.state.game} />
        Total score: {this.state.totalScore}
        <ResetButton onClickHandler={this.resetGame} />
      </div>
    );
  }
}

export default App;
