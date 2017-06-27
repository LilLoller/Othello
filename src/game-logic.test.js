import {W, B, E, tile, score, playerTurn, takeTurn} from './game-logic';

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
