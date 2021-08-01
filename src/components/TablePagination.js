import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const CustomTableFooter = styled.section`
  background: rgba(205, 205, 205, 0.9);
  padding: 18px 15px;
  width: 100%;
`;

const ResultsSelect = styled.select`
  max-width: 70px;
  display: inline-block;
  margin-left: 5px;
`;

const TablePagination = ({
  totalResults,
  entryStart,
  entryEnd,
  totalPages,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
}) => {
  const [pageBtnValues, setPageBtnValues] = useState([]);

  const getPageBtnValues = useCallback(() => {
    if (totalPages > 7 && currentPage < 5) {
      setPageBtnValues([1, 2, 3, 4, 5, '...', totalPages]);
    } else if (totalPages > 7 && currentPage > totalPages - 4) {
      setPageBtnValues([1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
    } else if (totalPages > 7) {
      setPageBtnValues([1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]);
    } else {
      let result = [];
      for (let i = 1; i <= totalPages; i++) {
        result.push(i);
      }
      setPageBtnValues(result);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    getPageBtnValues();
  }, [totalPages, currentPage, getPageBtnValues]);

  return (
    <CustomTableFooter>
      <div className="row">
        <div className="col d-flex align-items-center">
          <label className="mb-0">
            Showing {entryStart} to {entryEnd} of {totalResults} results
          </label>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <label htmlFor="results-per-page-select">Results Per Page:</label>
          <ResultsSelect
            id="results-per-page-select"
            value={resultLimit}
            className="form-select"
            onChange={(e) => setResultLimit(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </ResultsSelect>
        </div>
        <nav className="col d-flex align-items-center justify-content-end" aria-label="Table Page Navigation">
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                <span> &#60; </span>
                <span className="visually-hidden">Previous</span>
              </button>
            </li>
            {pageBtnValues.map((value, index) => {
              if (value === currentPage) {
                return (
                  <li className="page-item active" key={`pagination-btn-${index}`}>
                    <button className="page-link">{value}</button>
                  </li>
                );
              } else if (value === '...') {
                return (
                  <li className="page-item disabled" key={`pagination-btn-${index}`}>
                    <button className="page-link">{value}</button>
                  </li>
                );
              } else {
                return (
                  <li className="page-item" key={`pagination-btn-${index}`}>
                    <button onClick={() => setCurrentPage(value)} className="page-link">
                      {value}
                    </button>
                  </li>
                );
              }
            })}
            <li className="page-item">
              <button className="page-link" aria-label="next" onClick={() => setCurrentPage(currentPage + 1)}>
                <span> &#62; </span>
                <span className="visually-hidden">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </CustomTableFooter>
  );
};

export default TablePagination;