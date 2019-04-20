import { TRoll } from '../types';
import Game from '../logic/Game';
import TenthFrame from '../models/TenthFrame';

export default class Frame {
  private _roll1?: TRoll;
  private _roll2?: TRoll;
  private _game: Game;

  constructor(game: Game) {
    this._game = game;
  }

  get rollOne() {
    return this._roll1;
  }
  set rollOne(roll) {
    this._roll1 = roll;
  }

  get rollTwo() {
    return this._roll2;
  }
  set rollTwo(roll) {
    this._roll2 = roll;
  }

  get framePts() {
    const frameIndex = this._game.frames.indexOf(this);
    let pts = 0;
    for (let j = 0; j <= frameIndex; j++) {
      pts += this._game.frames[j].score;
    }
    return pts;
  }

  private get strikeBonus() {
    const frameIndex = this._game.frames.indexOf(this);
    const bonus1 = this._game.frames[frameIndex + 1].rollOne;
    let bonus2;
    if (bonus1 != 10) {
      bonus2 = this._game.frames[frameIndex + 1].rollTwo;
    } else {
      if (frameIndex != 8) bonus2 = this._game.frames[frameIndex + 2].rollOne;
      else {
        let tenthFrame = this._game.frames[frameIndex + 1] as TenthFrame;
        bonus2 = tenthFrame.rollTwo;
      }
    }
    return (bonus1 || 0) + (bonus2 || 0);
  }

  private get spareBonus() {
    const frameIndex = this._game.frames.indexOf(this);
    return this._game.frames[frameIndex + 1].rollOne || 0;
  }

  get isSpare() {
    return this.rollOne != 10 && (this.rollOne || 0) + (this.rollTwo || 0) == 10;
  }

  get isStrike() {
    return (this.rollOne || 0) == 10;
  }

  get score() {
    const baseScore = (this.rollOne || 0) + (this.rollTwo || 0);
    const strikeBonus = this.isStrike ? this.strikeBonus : 0;
    const spareBonus = this.isSpare ? this.spareBonus : 0;
    return baseScore + strikeBonus + spareBonus;
  }

  toString() {
    return `${this._roll1},${this._roll2}`;
  }
}
