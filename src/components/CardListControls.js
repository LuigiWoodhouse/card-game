const CardListControls = ({ onSortChange, onFilterChange }) => {
    return (
      <div>
        <h2>Card List Controls</h2>
        <label>
          Sort By:
          <select onChange={onSortChange}>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </label>
        <br />
        <label>
          Filter By:
          <input type="text" onChange={onFilterChange} />
        </label>
      </div>
    );
  };
  
  export default CardListControls