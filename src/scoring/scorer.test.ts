import Scorer from './scorer';
import { Game, GameScore } from '../types/BowlingTypes';

describe('When scoring games', () => {
  const scorer = new Scorer();
  it('Scores empty as 0', () => {
    // Given
    const game: Game = {};
    // When
    const score = scorer.score(game);
    // Then
    expect(score.total).toEqual(0);
  });
});
