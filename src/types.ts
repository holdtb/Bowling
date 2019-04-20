type Gutter = 0;
export type Strike = 10;
export type TRoll = Gutter | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Strike;

export type TGameInput = {
  rolls: Array<TRoll>;
};

export type TGameScore = {
  total: Number;
};
