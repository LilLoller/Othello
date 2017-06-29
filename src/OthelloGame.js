import React, { Component } from 'react';
import './OthelloGame.css';
import Board from './Board';
import {W, B, E, getAnnotatedBoard} from './game-logic';

const board = [
  [E, E, E, E, E, E],
  [E, E, E, E, E, E],
  [E, E, W, B, E, E],
  [E, E, B, W, E, E],
  [E, E, E, E, E, E],
  [E, E, E, E, E, E]
];

class OthelloGame extends Component {
  render() {
    return (
      <div className="OthelloGame">
        <Board board={getAnnotatedBoard(board)}/>
      </div>
    );
  }
}

export default OthelloGame;
