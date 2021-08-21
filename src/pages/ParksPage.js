import { useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setLastApiRequestStr, setSearchResults } from '../redux/features/searchResults';
import mountainBackground from '../images/mountainForestBackground-min.jpg';
import Table from '../components/Table';
import TableFilters from '../components/TableFilters';
import TablePagination from '../components/TablePagination';

import FullPageBackground from '../components/FullPageBackground';

const columns = [
  { name: 'Name', accessor: 'fullname' },
  { name: 'Park Code', accessor: 'parkcode' },
  { name: 'State(s)', accessor: 'states' },
  { name: 'Designation', accessor: 'designation' },
];

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  color: rgba(255, 255, 255);
`;

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

const ParksPage = ({ showInstructions, setShowInstructions, history }) => {
  const {
    results,
    currentPage,
    totalPages,
    totalResults,
    dataStart,
    dataEnd,
    resultLimit,
    states,
    designations,
    debouncedParkName,
    sortOrder,
    lastApiRequestStr,
  } = useSelector((state) => state.searchResults);

  const dispatch = useDispatch();

  const removeValsFromSelectObj = (inputData) => inputData.map((item) => item.value);

  const getParksData = useCallback(
    async (page, limit, states, designation, parkQuery, sortOrder) => {
      let apiRequestStr = `https://nationalparksbackend.herokuapp.com/api/parks?page=${page}&limit=${limit}`;
      if (states.length > 0) apiRequestStr += `&states=${removeValsFromSelectObj(states).join(',')}`;
      if (designation.length > 0) apiRequestStr += `&designation=${removeValsFromSelectObj(designation).join(',')}`;
      if (parkQuery) apiRequestStr += `&q=${parkQuery}`;
      if (sortOrder) apiRequestStr += `&order=${sortOrder}`;

      if (apiRequestStr !== lastApiRequestStr) {
        try {
          const { data, status } = await axios.get(apiRequestStr);
          if (status === 200) {
            dispatch(setLastApiRequestStr(apiRequestStr));
            dispatch(setSearchResults(data));
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    [dispatch, lastApiRequestStr],
  );

  useEffect(() => {
    getParksData(currentPage, resultLimit, states, designations, debouncedParkName, sortOrder);
  }, [getParksData, currentPage, resultLimit, states, designations, debouncedParkName, sortOrder]);

  return (
    <FullPageBackground backgroundImg={mountainBackground} paddingBottom="15px">
      <TitleContainer>
        <h1>National Parks</h1>
      </TitleContainer>
      <TableComponentContainer>
        <TableFilters debouncedParkName={debouncedParkName} states={states} designations={designations} />
        <TableInstructions showInstructions={showInstructions}>
          <InstructionsToggle onClick={() => setShowInstructions(!showInstructions)}>&times;</InstructionsToggle>
          <p className="mb-0">Click on a park in the table to see detailed infomation .</p>
        </TableInstructions>
        <div style={{ overflow: 'auto' }}>
          <Table
            history={history}
            columns={columns}
            data={results}
            states={states}
            designations={designations}
            totalResults={totalResults}
            entryStart={dataStart}
            entryEnd={dataEnd}
            totalPages={totalPages}
            currentPage={currentPage}
            resultLimit={resultLimit}
            sortOrder={sortOrder}
          />
          <TablePagination
            totalResults={totalResults}
            entryStart={dataStart}
            entryEnd={dataEnd}
            totalPages={totalPages}
            currentPage={currentPage}
            resultLimit={resultLimit}
          />
        </div>
      </TableComponentContainer>
    </FullPageBackground>
  );
};

export default ParksPage;
