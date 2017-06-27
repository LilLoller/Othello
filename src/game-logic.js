export const W = 'W';
export const B = 'B';
export const E = 'E';

export const tile = (x, y, board) =>
  board[y][x];

export const whatTile = (board, coord) => {
  const [xCoord, yCoord] = coord;
  let x = xCoord;
  let y = yCoord;
  return board[y][x];
}

export const score = (board) => {
  let blackCount = 0;
  let whiteCount = 0;

  for (let x = 0; x < board.length; ++x) {
    for (let y = 0; y < board.length; ++y) {
      const tileVal = board[y][x];
      if(tileVal===B)
      {
        blackCount++;
      }
      else if (tileVal===W)
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


const isOutOfBounds = (board, coord) => {
  const [x, y] = coord;
  return (x<0 || y<0 || x>board.length || y>board.length);
}

export const hasAdjacentPiece = (board, coord) => {
  const [xCoord, yCoord] = coord;
  for(let x = xCoord - 1; x <= (xCoord + 1); x++) {
    for(let y = yCoord - 1; y <= (yCoord + 1); y++) {
      // don't check the original coord, only adjacent coords
      if((x === xCoord) && (y === yCoord)) {
        continue;
      }
      if(isOutOfBounds(board, [x, y])){
        continue;
      }
      if(board[y][x]!==E){
          return true;
      }
    }
  }
  return false;
};

const DIRECTIONS = {
  'top': {
    xMod: 0,
    yMod: -1
  },
  'top-right': {
    xMod: 1,
    yMod: -1
  },
  'right': {
    xMod: 1,
    yMod: 0
  },
  'bottom-right': {
    xMod: 1,
    yMod: 1
  },
  'bottom': {
    xMod: 0,
    yMod: 1
  },
  'bottom-left': {
    xMod: -1,
    yMod: 1
  },
  'left': {
    xMod: -1,
    yMod: 0
  },
  'top-left': {
    xMod: -1,
    yMod: -1
  }
};

const findFlippableDirections = (board, coord) => {
  const [xCoord, yCoord] = coord;
  const startColor = board[yCoord][xCoord];
  const alternateColor = (startColor === W) ? B : W;
  const flippableDirections = [];

  for (const dirName in DIRECTIONS) {
    const dirModifier = DIRECTIONS[dirName];
    let x = xCoord + dirModifier.xMod;
    let y = yCoord + dirModifier.yMod;

    if (!isOutOfBounds(board, [x, y]) && (board[y][x] === alternateColor)) {
      let isAlternateColor = true;

      do {
        x += dirModifier.xMod;
        y += dirModifier.yMod;

        if (isOutOfBounds(board, [x, y])) {
          isAlternateColor = false;
        }
        else {
          const nextTile = board[y][x];
          if (nextTile === E) {
            isAlternateColor = false;
          }
          else if (nextTile === startColor) {
            flippableDirections.push(dirName);
            isAlternateColor = false;
          }
        }
      } while (isAlternateColor);
    }
  }

  return flippableDirections;
}

const flipTiles = (board, directions, coord) => {
  const [xCoord, yCoord] = coord;
  const flipColor = board[yCoord][xCoord];
  for (const dirName of directions) {
    const dirModifier = DIRECTIONS[dirName];
    let x = xCoord + dirModifier.xMod;
    let y = yCoord + dirModifier.yMod;

    while (board[y][x] !== flipColor) {
      board[y][x] = flipColor;
    }
  }
}

export const takeTurn = (board, coord) => {
  const [x, y] = coord;
  if(board[y][x] !== E) {
    throw new Error('Error: You cannot place a piece on an occupied square.');
  }

  if(!hasAdjacentPiece(board, coord)){
    throw new Error('Error: The piece must be placed adjacent to another piece.')
  }
  board[y][x] = playerTurn(board);
  flipTiles(board, findFlippableDirections(board, coord), coord);
};
