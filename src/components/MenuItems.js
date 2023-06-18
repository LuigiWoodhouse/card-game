const MenuItems = ({ items, onItemClick }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  };
  
  export default MenuItems