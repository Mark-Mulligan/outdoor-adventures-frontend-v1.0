import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setResultLimit, nextPage, previousPage, jumpPage } from '../redux/features/searchResults';

import { getWindowWidth } from '../utils/uilt';

const CustomTableFooter = styled.section`
  background: rgba(205, 205, 205, 0.9);
  width: 100%;
  min-width: 650px;
`;

const ResultsSelect = styled.select`
  max-width: 70px;
  display: inline-block;
  margin-left: 5px;
`;

const PaginationControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Col = styled.div`
  margin: 15px;
  @media (max-width: 380px) {
    margin-left: 5px;
  }
`;

const ColStyled = styled(Col)`
  display: flex;
  align-items: center;
`;

const Col3 = styled.nav`
  margin: 15px;
  @media (max-width: 380px) {
    margin-left: 5px;
  }
`;

const PaginationItem = styled.li`
  display: flex;
  align-items: center;
`;

const TablePagination = ({ totalResults, entryStart, entryEnd, totalPages, currentPage, resultLimit }) => {
  const [pageBtnValues, setPageBtnValues] = useState([]);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const dispatch = useDispatch();

  const paginationLargeSceens = useCallback(() => {
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
  }, [totalPages, currentPage]);

  const paginationSmallScreens = useCallback(() => {
    if (totalPages > 7 && currentPage < 3) {
      setPageBtnValues([1, 2, 3, '...', totalPages]);
    } else if (totalPages > 7 && currentPage > totalPages - 2) {
      setPageBtnValues([1, '...', totalPages - 2, totalPages - 1, totalPages]);
    } else if (totalPages > 7) {
      setPageBtnValues([1, '...', currentPage, '...', totalPages]);
    } else {
      let result = [];
      for (let i = 1; i <= totalPages; i++) {
        result.push(i);
      }
      setPageBtnValues(result);
    }
  }, [totalPages, currentPage]);

  const getPageBtnValues = useCallback(() => {
    if (windowWidth < 370) {
      paginationSmallScreens();
    } else {
      paginationLargeSceens();
    }
  }, [paginationSmallScreens, paginationLargeSceens, windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getPageBtnValues();
  }, [totalPages, currentPage, getPageBtnValues]);

  return (
    <CustomTableFooter>
      <PaginationControlsContainer>
        <ColStyled>
          <label className="mb-0">
            Showing {entryStart} to {entryEnd} of {totalResults} results
          </label>
        </ColStyled>
        <Col className="ml-2">
          <label htmlFor="results-per-page-select">Results Per Page:</label>
          <ResultsSelect
            id="results-per-page-select"
            value={resultLimit}
            className="form-select"
            onChange={(e) => dispatch(setResultLimit(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </ResultsSelect>
        </Col>
        <Col3 aria-label="Table Page Navigation">
          <ul className="pagination mb-0">
            <PaginationItem className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" aria-label="Previous" onClick={() => dispatch(previousPage())}>
                <span> &#60; </span>
                <span className="visually-hidden">Previous</span>
              </button>
            </PaginationItem>
            {pageBtnValues.map((value, index) => {
              if (value === currentPage) {
                return (
                  <PaginationItem className="page-item active" key={`pagination-btn-${index}`}>
                    <button className="page-link">{value}</button>
                  </PaginationItem>
                );
              } else if (value === '...') {
                return (
                  <PaginationItem className="page-item disabled" key={`pagination-btn-${index}`}>
                    <button className="page-link">{value}</button>
                  </PaginationItem>
                );
              } else {
                return (
                  <PaginationItem className="page-item" key={`pagination-btn-${index}`}>
                    <button onClick={() => dispatch(jumpPage(value))} className="page-link">
                      {value}
                    </button>
                  </PaginationItem>
                );
              }
            })}
            <PaginationItem className="page-item">
              <button className="page-link" aria-label="next" onClick={() => dispatch(nextPage())}>
                <span> &#62; </span>
                <span className="visually-hidden">Next</span>
              </button>
            </PaginationItem>
          </ul>
        </Col3>
      </PaginationControlsContainer>
    </CustomTableFooter>
  );
};

export default TablePagination;
