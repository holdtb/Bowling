import { TRoll } from '../types';
import Frame from '../models/Frame';
import TenthFrame from '../models/TenthFrame';

export default class Game {
  constructor() {
    this._rolls = [];
    this._frames = [];
    const NUM_REG_FRAMES = 9;
    for (let i = 0; i < NUM_REG_FRAMES; i++) {
      this._frames.push(new Frame(this, i + 1));
    }
    this._frames.push(new TenthFrame(this));
  }

  private _rolls: Array<TRoll>;
  private _frames: Array<Frame>;

  get frames() {
    return this._frames;
  }

  public roll(...rolls: TRoll[]): number {
    this._rolls.push(...rolls);
    return this.totalScore;
  }

  get totalScore() {
    return this._calculateTotalScore();
  }

  private _calculateTotalScore() {
    const rolls = this._rolls.slice(0); // clone rolls[]
    let frame = 0;

    while (rolls.length > 0) {
      let currFrame = this._frames[frame];
      if (frame < 9) {
        currFrame.rollOne = rolls.shift();
        if (currFrame.rollOne == 10) {
          // we striked, move on to next frame
          frame++;
          continue;
        }
        currFrame.rollTwo = rolls.shift();
        frame++;
        if (currFrame.rollOne + currFrame.rollTwo > 10) throw new Error('Invalid move.');
      } else {
        // Handle frame 10
        const tenthFrame = currFrame as TenthFrame;
        tenthFrame.rollOne = rolls.shift();
        tenthFrame.rollTwo = rolls.shift();
        tenthFrame.rollThree = rolls.shift();
      }
    }

    let frameScores = this._frames.map(frame => frame.score);
    return frameScores.reduce((accum, score) => accum + score, 0);
  }
}
