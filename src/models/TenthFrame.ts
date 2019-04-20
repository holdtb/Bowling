import Frame from './Frame';
import Game from '../logic/Game';
import { TRoll } from '../types';

export default class TenthFrame extends Frame {
  private _roll3?: TRoll;

  constructor(game: Game) {
    super(game);
  }

  get rollThree() {
    return this._roll3;
  }

  set rollThree(roll) {
    this._roll3 = roll;
  }

  get score() {
    return (this.rollOne || 0) + (this.rollTwo || 0) + (this.rollThree || 0);
  }
}
