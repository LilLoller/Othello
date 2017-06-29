import React from 'react';
import './Tile.css';

const Tile = ({tile, x, y, onPlayerTurn}) => (
  <span className={'Tile ' + tile} onClick={() => onPlayerTurn([x, y])}>
     ●
  </span>
);

export default Tile;
