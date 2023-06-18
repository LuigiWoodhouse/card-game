const CardFilter = ({ filterValue, onFilterChange }) => {
    return (
      <div>
        <h2>Card Filter</h2>
        <label>
          Filter By:
          <input type="text" value={filterValue} onChange={onFilterChange} />
        </label>
      </div>
    );
  };
  
  export default CardFilter