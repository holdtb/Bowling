import React, { Component } from 'react';
import Game from './logic/Game';
import { RollInputContainer } from './components/RollInput';
import { FrameDisplayContainer } from './components/FrameDisplay';
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
      game: new Game()
    });
  }

  handleRoll(roll: TRoll) {
    let game = this.state.game;
    game.roll(roll);
    const totalScore = game.totalScore;
    this.setState({
      game,
      totalScore
    });
  }

  render() {
    return (
      <div
        style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center' }}
        className="App">
        <p>Lets Bowl!</p>
        <RollInputContainer onRoll={this.handleRoll} />
        <FrameDisplayContainer game={this.state.game} />
        Total score: {this.state.totalScore}
        <button style={{ padding: 10, margin: 10 }} onClick={this.resetGame}>
          Reset Game
        </button>
      </div>
    );
  }
}

export default App;
