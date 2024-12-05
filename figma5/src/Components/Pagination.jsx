 
import   { useState } from 'react';
import { PropTypes } from 'prop-types'

const Pagination = ({ pageCount, displayItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log(pageCount);
  console.log(currentPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    displayItems(pageNumber);
  };

  return (
    <div>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((i) => (
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{ margin: '5px' }}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  displayItems: PropTypes.func.isRequired,
}

export default Pagination;
