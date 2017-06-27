import React from 'react';
import './Tile.css';

const Tile = ({tile}) => (
  <span className={'Tile ' + tile}>
     ●  
  </span>
);

export default Tile;
