import Game from './Game';

describe('Given a game of bowling', () => {
  it('Empty game has no score', () => {
    const game = new Game();
    expect(game.totalScore).toEqual(0);
  });

  it('Scores a gutter game', () => {
    const game = new Game();
    game.roll(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    expect(game.totalScore).toEqual(0);
  });

  it('Roll a 6', () => {
    const game = new Game();
    game.roll(6);
    expect(game.totalScore).toEqual(6);
  });

  it('Handles spares', () => {
    const game = new Game();
    game.roll(5, 5, 6);
    const expected = 5 + 5 + 6 + 6;
    expect(game.totalScore).toEqual(expected);
  });

  it('Handles strikes', () => {
    const game = new Game();
    game.roll(10, 4, 5);
    const expected = 10 + 9 + 9;
    expect(game.totalScore).toEqual(expected);
  });

  it('Scores a full game', () => {
    const game = new Game();
    game.roll(10); // Frame 1
    game.roll(7, 3); // 2
    game.roll(9, 0); // 3
    game.roll(10); // 4
    game.roll(0, 8); // 5
    game.roll(8, 2); // 6
    game.roll(0, 6); // 7
    game.roll(10); // 8
    game.roll(10); // 9
    game.roll(10, 8, 1); // 10
    expect(game.totalScore).toEqual(167);
  });

  it('A perfect game scores 300', () => {
    const game = new Game();
    game.roll(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10);
    expect(game.totalScore).toEqual(300);
  });

  it('Catches invalid moves', () => {
    const game = new Game();
    const fn = () => game.roll(7, 4);
    expect(fn).toThrowError('Invalid move.');
  });
});
