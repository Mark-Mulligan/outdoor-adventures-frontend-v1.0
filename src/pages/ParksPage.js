import { useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchResults } from '../redux/features/searchResults';
import mountainBackground from '../images/mountainForestBackground-min.jpg';
import Table from '../components/Table';
import FullPageBackground from '../components/FullPageBackground';
import { formatTableData } from '../utils/uilt';

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

const ParksPage = ({
  showInstructions,
  setShowInstructions,
  sortOrder,
  setSortOrder,
  parkName,
  setParkName,
  debouncedParkName,
  setDebouncedParkName,
  states,
  setStates,
  designations,
  setDesignations,
  setCurrentPage,
  setResultLimit,
  lastSearchUrl,
  setLastSearchUrl,
  history,
}) => {
  const { results, currentPage, totalPages, totalResults, dataStart, dataEnd } = useSelector(
    (state) => state.searchResults,
  );

  const { resultLimit } = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  const removeValsFromSelectObj = (inputData) => {
    const result = [];
    if (inputData.length >= 1) {
      inputData.forEach((item) => {
        result.push(item.value);
      });
    }
    return result;
  };

  const getParksData = useCallback(
    async (page, limit, states, designation, parkQuery, sortOrder) => {
      let apiRequestStr = `https://nationalparksbackend.herokuapp.com/api/parks?page=${page}&limit=${limit}`;
      if (states.length > 0) apiRequestStr += `&states=${removeValsFromSelectObj(states).join(',')}`;
      if (designation.length > 0) apiRequestStr += `&designation=${removeValsFromSelectObj(designation).join(',')}`;
      if (parkQuery) apiRequestStr += `&q=${parkQuery}`;
      if (sortOrder) apiRequestStr += `&order=${sortOrder}`;

      if (apiRequestStr !== lastSearchUrl) {
        try {
          const { data, status } = await axios.get(apiRequestStr);
          console.log(data);
          if (status === 200) {
            setLastSearchUrl(apiRequestStr);
            dispatch(setSearchResults(data));
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    [setLastSearchUrl, lastSearchUrl, dispatch],
  );

  useEffect(() => {
    getParksData(currentPage, resultLimit, states, designations, debouncedParkName, sortOrder);
  }, [getParksData, currentPage, resultLimit, states, designations, debouncedParkName, sortOrder]);

  return (
    <FullPageBackground backgroundImg={mountainBackground} paddingBottom="15px">
      <TitleContainer>
        <h1>National Parks</h1>
      </TitleContainer>
      <Table
        history={history}
        columns={columns}
        data={results}
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
        pagination
        filters
        parkName={parkName}
        setParkName={setParkName}
        debouncedParkName={debouncedParkName}
        setDebouncedParkName={setDebouncedParkName}
        states={states}
        setStates={setStates}
        designations={designations}
        setDesignations={setDesignations}
        totalResults={totalResults}
        entryStart={dataStart}
        entryEnd={dataEnd}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        resultLimit={resultLimit}
        setResultLimit={setResultLimit}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </FullPageBackground>
  );
};

export default ParksPage;
