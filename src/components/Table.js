import { useEffect } from 'react';
import styled from 'styled-components';

import TableFilters from './TableFilters';
import TablePagination from './TablePagination';

const CustomTableHead = styled.thead`
  background: black;
  color: white;
`;

const CustomTableRow = styled.tr`
  :hover {
    background: rgba(140, 140, 140, 0.9);
    cursor: pointer;
  }
  background: rgba(180, 180, 180, 0.9);
`;

const LightCustomTableRow = styled(CustomTableRow)`
  background: rgba(205, 205, 205, 0.9);
`;

const renderCells = (item, rowIndex, columns) => {
  return columns.map((col, colIndex) => {
    return <td key={`row-${rowIndex} col-${colIndex}`}>{item[col.accessor]}</td>;
  });
};

const Table = ({
  columns,
  data,
  pagination,
  filters,
  parkName,
  setParkName,
  setDebouncedParkName,
  setStates,
  setDesignations,
  totalResults,
  entryStart,
  entryEnd,
  totalPages,
  currentPage,
  setCurrentPage,
  resultLimit,
  setResultLimit,
  sortOrder,
  setSortOrder,
}) => {
  const onTableColClick = (columnVal) => {
    if (sortOrder === `${columnVal}-desc`) {
      setSortOrder('');
    } else if (sortOrder === `${columnVal}-asc`) {
      setSortOrder(`${columnVal}-desc`);
    } else {
      setSortOrder(`${columnVal}-asc`);
    }
  };

  useEffect(() => {
    console.log(sortOrder);
  }, [sortOrder]);

  return (
    <>
      {filters && (
        <TableFilters
          parkName={parkName}
          setParkName={setParkName}
          setCurrentPage={setCurrentPage}
          setDebouncedParkName={setDebouncedParkName}
          setStates={setStates}
          setDesignations={setDesignations}
        />
      )}
      <table className="table mb-0">
        <CustomTableHead>
          <tr>
            {columns.map((col) => (
              <th scope="col" key={col.accessor} onClick={() => onTableColClick(col.accessor)}>
                {col.name}
              </th>
            ))}
          </tr>
        </CustomTableHead>

        <tbody>
          {data.map((item, rowIndex) => {
            return rowIndex % 2 === 0 ? (
              <LightCustomTableRow key={`row-${rowIndex}`}>{renderCells(item, rowIndex, columns)}</LightCustomTableRow>
            ) : (
              <CustomTableRow key={`row-${rowIndex}`}>{renderCells(item, rowIndex, columns)}</CustomTableRow>
            );
          })}
        </tbody>
      </table>
      {pagination && (
        <TablePagination
          totalResults={totalResults}
          entryStart={entryStart}
          entryEnd={entryEnd}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          resultLimit={resultLimit}
          setResultLimit={setResultLimit}
        />
      )}
    </>
  );
};

export default Table;