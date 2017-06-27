export const W = 'W';
export const B = 'B';
export const E = 'E';

export const tile = (x, y, board) =>
  board[y][x];

export const score = (board) => {
  let blackCount = 0;
  let whiteCount = 0;

  for (let x = 0; x < board.length; ++x) {
    for (let y = 0; y < board.length; ++y) {
      const tileVal = board[y][x];
      if(tileVal==B)
      {
        blackCount++;
      }
      else if (tileVal==W)
      {
        whiteCount++;
      }

    }
  }

  return {
    black: blackCount,
    white: whiteCount
  };
};

export const playerTurn = (board) => {
  const playerScore = score(board);
  return (playerScore.black === playerScore.white) ? B : W;
};

export const hasAdjacentPiece = (board, coord) => {
  const [xCoord, yCoord] = coord;
  for(let x = xCoord - 1; x <= (xCoord + 1); x++) {
    for(let y = yCoord - 1; y <= (yCoord + 1); y++) {
      // don't check the original coord, only adjacent coords
      if((x === xCoord) && (y === yCoord)) {
        continue;
      }
      // ignore adjacent coords that are out of bounds
      if(x<0 || y<0 || x>board.length || y>board.length){
        continue;
      }
      if(board[y][x]!==E){
          return true;
      }
    }
  }
  return false;
};

export const takeTurn = (board, coord) => {
  const [x, y] = coord;
  if(board[y][x] !== E) {
    throw new Error('Error: You cannot place a piece on an occupied square.');
  }

  if(!hasAdjacentPiece(board, coord)){
    throw new Error('Error: The piece must be placed adjacent to another piece.')
  }
};
