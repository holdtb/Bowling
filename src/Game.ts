import { TRoll } from './types';
import Frame from './models/Frame';
import TenthFrame from './models/TenthFrame';

export default class Game {
  constructor() {
    this._rolls = [];
    this._frames = [];
    const NUM_REG_FRAMES = 9;
    for (let i = 0; i < NUM_REG_FRAMES; i++) {
      this._frames.push(new Frame(this, i + 1));
    }
    this._frames.push(new TenthFrame(this));
    this._frameNumber = 1;
    this._pinsRemaining = 10;
    this._rollCount = 0;
    this._tenthFrameMark = false;
    this._gameOver = false;
  }

  private _rolls: Array<TRoll>;
  private _frames: Array<Frame>;
  private _frameNumber: number;
  private _pinsRemaining: number;
  private _rollCount: number;
  private _tenthFrameMark: boolean;
  private _gameOver = false;

  get pinsRemaining() {
    return this._pinsRemaining;
  }

  get frames() {
    return this._frames;
  }

  get gameOver() {
    return this._gameOver;
  }

  get frameNumber() {
    return this._frameNumber;
  }

  get rollCount() {
    return this._rollCount;
  }

  get totalScore() {
    return this.frames.reduce((accum, frame) => accum + frame.score, 0);
  }

  private get isFirstRoll() {
    return this.rollCount == 0;
  }

  private get currentFrame() {
    return this.frames[this._frameNumber - 1];
  }

  public roll(...rolls: TRoll[]) {
    this._rolls.push(...rolls);

    for (let i = 0; i < rolls.length; i++) {
      let roll = rolls[i];
      if (roll > this.pinsRemaining) throw new Error('Invalid move.');

      if (this._frameNumber != 10) this.handleStandardFrameRoll(roll);
      else this.handleTenthFrameRoll(roll);
    }
  }

  private handleStandardFrameRoll(roll: TRoll) {
    if (this.isFirstRoll) {
      this.currentFrame.rollOne = roll;
      if (roll == 10) {
        // Strike
        this.nextFrame();
      } else {
        this._pinsRemaining -= roll;
        this._rollCount++;
      }
    } else {
      // second roll
      this.currentFrame.rollTwo = roll;
      this.nextFrame();
    }
  }

  private handleTenthFrameRoll(roll: TRoll) {
    const tenthFrame = this.currentFrame as TenthFrame;
    if (this.rollCount == 0) {
      tenthFrame.rollOne = roll;
    } else if (this.rollCount == 1) {
      tenthFrame.rollTwo = roll;
      if (this._pinsRemaining - roll > 0) this._gameOver = true;
    } else if (this._tenthFrameMark) {
      tenthFrame.rollThree = roll;
      this._gameOver = true;
    }

    this._pinsRemaining -= roll;
    this._rollCount++;

    if (this._pinsRemaining == 0) {
      this._tenthFrameMark = true;
      this._pinsRemaining = 10;
    }
  }

  private nextFrame() {
    this._frameNumber++;
    this._pinsRemaining = 10;
    this._rollCount = 0;
  }
}
