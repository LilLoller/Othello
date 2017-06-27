import React from 'react';
import './Row.css';
import Tile from './Tile';

const Row = ({tiles}) => {
  const tileComponents = [];
  for (const tile of tiles) {
    tileComponents.push(<Tile key={tileComponents.length} tile={tile}/>);
  }

  return (
    <div className="Row">
      {tileComponents}
    </div>
  );
};

export default Row;
