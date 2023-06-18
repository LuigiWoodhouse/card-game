import React from 'react';
import MenuItems from './MenuItems'; // Import the MenuItems component

const Menu = ({ items, activeItem, onItemClick }) => {
  return (
    <div>
      <h2>Menu</h2>
      <MenuItems items={items} onItemClick={onItemClick} />
      <hr />
      <h3>Active Item: {activeItem}</h3>
    </div>
  );
};

export default Menu;
