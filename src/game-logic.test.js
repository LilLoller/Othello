import {W, B, E, P, tile, score, playerTurn, takeTurn, whatTile, getAnnotatedBoard} from './game-logic';

test('score() gives the correct score for board configuration.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];


  expect(score(board)).toEqual({
    black: 2,
    white: 2
  })
  const board2 = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, B, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];

  expect(score(board2)).toEqual({
    black: 3,
    white: 2
  })
});

test('playerTurn() tells us whose turn is next.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(playerTurn(board)).toEqual(B);

  const board2 = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, B, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(playerTurn(board2)).toEqual(W);
});

test('takeTurn() errors if a piece is placed on an existing one.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(() => takeTurn(board, [2, 2])).toThrow('Error: You cannot place a piece on an occupied square.');
});

test('takeTurn() errors if a piece is not placed adjacent to another piece.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(() => takeTurn(board, [0, 0])).toThrow('Error: The piece must be placed adjacent to another piece.');

  const board2 = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(() => takeTurn(board2, [1, 0])).toThrow('Error: The piece must be placed adjacent to another piece.');
});

test('takeTurn() replaces an empty space with the correct letter.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(whatTile(board, [1, 1])).toEqual(E);
  takeTurn(board, [1, 1]);
  expect(whatTile(board, [1, 1])).toEqual(B);
  takeTurn(board, [4, 4]);
  expect(whatTile(board, [4, 4])).toEqual(W);
  takeTurn(board, [1, 3]);
  expect(whatTile(board, [1, 3])).toEqual(B);
});

test('whatTile() returns the tile that it is asked to.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  expect(whatTile(board, [5, 5])).toEqual(E);
});

test('takeTurn() flips tiles between it and another.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  takeTurn(board, [1, 2]);
  expect(board).toEqual([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, B, B, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
});

test('getAnnotatedBoard() also shows where the player can next place a tile.', () => {
  const board = [
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ];
  const annotatedBoard = getAnnotatedBoard(board);
  expect(annotatedBoard).toEqual([
    [E, E, E, E, E, E],
    [E, P, P, P, P, E],
    [E, P, W, B, P, E],
    [E, P, B, W, P, E],
    [E, P, P, P, P, E],
    [E, E, E, E, E, E]
  ]);
});
