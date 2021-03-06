import React from 'react';
import ReactDom from 'react-dom';
const MaterialTile = ({ item }) => (
  <div className="items">
    <span className="wtitle">{item.name}</span>
    <div className="desc">{item.description}</div>
  </div>
);
export default MaterialTile;
