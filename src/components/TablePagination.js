import styled from 'styled-components';
import Select from 'react-select';

const CustomTableFooter = styled.section`
  background: rgba(205, 205, 205, 0.9);
  padding: 15px;
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
  return (
    <CustomTableFooter>
      <div className="row">
        <div className="col">
          Showing {entryStart} to {entryEnd} of {totalResults} results
        </div>
        <div className="col">
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
        <nav className="col" aria-label="Table Page Navigation">
          <ul className="pagination mb-0">
            <li className="page-item">
              <button className="page-link" aria-label="Previous">
                <span> &#60; </span>
                <span className="visually-hidden">Previous</span>
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" aria-label="next">
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
