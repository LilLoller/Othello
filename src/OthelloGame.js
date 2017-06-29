import React, { Component } from 'react';
import './OthelloGame.css';
import Board from './Board';
import {W, B, E, getAnnotatedBoard} from './game-logic';

class OthelloGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [E, E, E, E, E, E],
        [E, E, E, E, E, E],
        [E, E, W, B, E, E],
        [E, E, B, W, E, E],
        [E, E, E, E, E, E],
        [E, E, E, E, E, E]
      ]
    };
  }

  render() {
    return (
      <div className="OthelloGame">
        <Board board={getAnnotatedBoard(this.state.board)}/>
      </div>
    );
  }
}

export default OthelloGame;
