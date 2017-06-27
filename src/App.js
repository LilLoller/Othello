import React, { Component } from 'react';
import './App.css';
import Othello from './Othello';
import {W, B, E} from './game-logic';

const board = [
  [E, E, E, E, E, E],
  [E, E, E, E, E, E],
  [E, E, W, B, E, E],
  [E, E, B, W, E, E],
  [E, E, E, E, E, E],
  [E, E, E, E, E, E]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Othello board={board}/>
      </div>
    );
  }
}

export default App;
