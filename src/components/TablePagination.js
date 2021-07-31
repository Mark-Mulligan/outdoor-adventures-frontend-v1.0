import styled from 'styled-components';

const CustomTableFooter = styled.section`
  background: rgba(205, 205, 205, 0.9);
  padding: 15px;
  width: 100%;
`;

const TablePagination = () => {
  return (
    <CustomTableFooter>
      <div className="row">
        <div className="col">Showing 1 to 10 of 450 results</div>
        <div className="col">
          Results Per Page: <select>50</select>
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
