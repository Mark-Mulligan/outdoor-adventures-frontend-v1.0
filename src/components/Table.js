import styled from 'styled-components';

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

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <CustomTableHead>
        <tr>
          {columns.map((col) => (
            <th scope="col" key={col.accessor}>
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
  );
};

export default Table;
