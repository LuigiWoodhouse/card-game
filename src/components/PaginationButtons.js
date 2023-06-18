const PaginationButtons = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div>
        <h2>Pagination Buttons</h2>
        <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    );
  };
  
  export default PaginationButtons