import React from 'react';
import {P} from './game-logic';
import './Tile.css';

const Tile = ({tile, x, y, onPlayerTurn}) => {
  const handleClick = (tile === P)
    ? () => onPlayerTurn([x, y])
    : x => x;

  return (
    <span className={'Tile ' + tile} onClick={handleClick} >
      ●
    </span>
  );
}

export default Tile;
