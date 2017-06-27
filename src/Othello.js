import React from 'react';
import './Othello.css';
import Row from './Row';
import {B, score, playerTurn} from './game-logic';

const Othello = ({board}) => {
  const playerScore = score(board);
  const player = (playerTurn(board) === B) ? 'Black' : 'White';
  const rows = [];
  for (const row of board) {
    rows.push(<Row key={rows.length} tiles={row}/>);
  }

  return (
    <div className="Othello">
      <div className="gameInfo">
        <span className="playerInfo">Player: <span className={player.toLowerCase()}>{player}</span></span>
        <span className="spacer"/>
        <span className="scoreInfo">Score:
          <span className="black">{playerScore.black}</span> :
          <span className="white">{playerScore.white}</span>
        </span>
      </div>
      <div className="board">
        {rows}
      </div>
    </div>
  );
};

export default Othello;
