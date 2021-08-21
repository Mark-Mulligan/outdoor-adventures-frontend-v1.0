import styled from 'styled-components';

import TableFilters from './TableFilters';
import TablePagination from './TablePagination';

const TableComponentContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const TableInstructions = styled.div`
  display: ${(props) => (props.showInstructions ? 'block' : 'none')};
  max-width: 700px;
  margin: 0 auto 1.5rem auto;
  text-align: center;
  background: rgb(245, 245, 245);
  padding: 7px;
  border-radius: 5px;
  position: relative;
`;

const InstructionsToggle = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  font-size: 20px;
  padding-right: 5px;
  padding-left: 5px;
`;

const CustomTableHead = styled.thead`
  :hover {
    cursor: pointer;
  }
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

const NoBreakSpan = styled.span`
  white-space: nowrap;
`;

const renderCells = (item, rowIndex, columns) => {
  return columns.map((col, colIndex) => {
    return <td key={`row-${rowIndex} col-${colIndex}`}>{item[col.accessor]}</td>;
  });
};

const Table = ({
  history,
  columns,
  data,
  showInstructions,
  setShowInstructions,
  pagination,
  filters,
  parkName,
  setParkName,
  setDebouncedParkName,
  states,
  designations,
  totalResults,
  entryStart,
  entryEnd,
  totalPages,
  currentPage,
  resultLimit,
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

  const onTableRowClick = (parkcode) => {
    history.push(`/parks/${parkcode}`);
  };

  return (
    <TableComponentContainer>
      {filters && (
        <TableFilters
          parkName={parkName}
          setParkName={setParkName}
          setDebouncedParkName={setDebouncedParkName}
          states={states}
          designations={designations}
        />
      )}

      <TableInstructions showInstructions={showInstructions}>
        <InstructionsToggle onClick={() => setShowInstructions(!showInstructions)}>&times;</InstructionsToggle>
        <p className="mb-0">Click on a park in the table to see detailed infomation .</p>
      </TableInstructions>
      <div style={{ overflow: 'auto' }}>
        <table className="table mb-0" style={{ minWidth: '650px' }}>
          <CustomTableHead>
            <tr>
              {columns.map((col) => (
                <th scope="col" key={col.accessor} onClick={() => onTableColClick(col.accessor)}>
                  <NoBreakSpan>
                    {col.name}
                    {sortOrder === `${col.accessor}-asc` && (
                      <i className="fas fa-sort-down" style={{ marginLeft: '5px' }}></i>
                    )}
                    {sortOrder === `${col.accessor}-desc` && (
                      <i className="fas fa-sort-up" style={{ marginLeft: '5px' }}></i>
                    )}
                  </NoBreakSpan>
                </th>
              ))}
            </tr>
          </CustomTableHead>

          <tbody>
            {data.map((item, rowIndex) => {
              return rowIndex % 2 === 0 ? (
                <LightCustomTableRow onClick={() => onTableRowClick(item.parkcode)} key={`row-${rowIndex}`}>
                  {renderCells(item, rowIndex, columns)}
                </LightCustomTableRow>
              ) : (
                <CustomTableRow onClick={() => onTableRowClick(item.parkcode)} key={`row-${rowIndex}`}>
                  {renderCells(item, rowIndex, columns)}
                </CustomTableRow>
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
            resultLimit={resultLimit}
          />
        )}
      </div>
    </TableComponentContainer>
  );
};

export default Table;
