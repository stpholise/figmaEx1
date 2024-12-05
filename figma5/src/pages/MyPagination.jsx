import  { useState } from 'react';
import { PropTypes } from 'prop-types';

const Pagination = ({ totalPages = 2000 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return; // Out of bounds
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const range = 2; // Pages around the current page to display
    const pagination = [];
    
    let startPage, endPage;

    // Determine the range of pages to display
    if (currentPage <= range + 1) {
      // If near the start of the pagination
      startPage = 1;
      endPage = Math.min(7, totalPages); // Show first 5 pages if near the start
    } else if (currentPage >= totalPages - range) {
      // If near the end of the pagination
      startPage = Math.max(totalPages - 5, 1); // Show last 5 pages if near the end
      endPage = totalPages;
    } else {
      // For pages in the middle
      startPage = currentPage - range;
      endPage = currentPage + range;
    }

    // Add Previous Button
    pagination.push(
      <button
        key="prev"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );

    // Add first page and ellipsis if there are pages before the start range
    if (startPage > 1) {
      pagination.push(
        <button key="1" onClick={() => changePage(1)} disabled={currentPage === 1}>
          1
        </button>
      );
      if (startPage > 2) {
        pagination.push(<span key="ellipsis1">...</span>);
      }
    }

    // Add page numbers within the range
    for (let i = startPage; i <= endPage; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis if there are pages after the end range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pagination.push(<span key="ellipsis2">...</span>);
      }
      pagination.push(
        <button
          key={totalPages}
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>
      );
    }

    // Add Next Button
    pagination.push(
      <button
        key="next"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return pagination;
  };

  return <div className="pagination">{renderPagination()}</div>;
};

const MyPagination = () => {
  const totalPages = 2000;
  return (
    <div>
      <h1>Pagination Example</h1>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
}

export default MyPagination;

