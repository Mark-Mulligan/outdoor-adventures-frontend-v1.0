import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setSortOrder } from '../redux/features/searchResults';

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

const Table = ({ history, columns, data, sortOrder }) => {
  const dispatch = useDispatch();

  const onTableColClick = (columnVal) => {
    if (sortOrder === `${columnVal}-desc`) {
      dispatch(setSortOrder(''));
    } else if (sortOrder === `${columnVal}-asc`) {
      dispatch(setSortOrder(`${columnVal}-desc`));
    } else {
      dispatch(setSortOrder(`${columnVal}-asc`));
    }
  };

  const onTableRowClick = (parkcode) => {
    history.push(`/parks/${parkcode}`);
  };

  return (
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
  );
};

export default Table;
