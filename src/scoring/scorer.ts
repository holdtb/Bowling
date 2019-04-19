import { Game, GameScore } from '../types/BowlingTypes';

export default class Scorer {
  /**
   * A BowlingGame Scorer
   */
  constructor() {}

  score(game: Game): GameScore {
    return { total: 0 };
  }
}
