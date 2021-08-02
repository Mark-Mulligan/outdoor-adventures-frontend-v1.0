import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import mountainBackground from '../images/mountainForestBackground-min.jpg';
import Table from '../components/Table';
import FullPageBackground from '../components/FullPageBackground';

const columns = [
  { name: 'Name', accessor: 'fullname' },
  { name: 'Park Code', accessor: 'parkcode' },
  { name: 'State(s)', accessor: 'states' },
  { name: 'Designation', accessor: 'designation' },
];

const ParksPage = ({ history }) => {
  const [parkData, setParkData] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [states, setStates] = useState([]);
  const [parkName, setParkName] = useState('');
  const [debouncedParkName, setDebouncedParkName] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [entryStart, setEntryStart] = useState(0);
  const [entryEnd, setEntryEnd] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultLimit, setResultLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState('');

  const getParksData = useCallback(async (page, limit, states, designation, parkQuery, sortOrder) => {
    let apiRequestStr = `https://nationalparksbackend.herokuapp.com/api/parks?page=${page}&limit=${limit}`;
    if (states.length > 0) apiRequestStr += `&states=${states.join(',')}`;
    if (designation.length > 0) apiRequestStr += `&designation=${designation.join(',')}`;
    if (parkQuery) apiRequestStr += `&q=${parkQuery}`;
    if (sortOrder) apiRequestStr += `&order=${sortOrder}`;

    try {
      const { data, status } = await axios.get(apiRequestStr);
      if (status === 200) {
        setTableData(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setTableData = (data) => {
    setParkData(data.results);
    setTotalResults(data.totalResults);
    setEntryStart(data.dataStart);
    setEntryEnd(data.dataEnd);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    getParksData(currentPage, resultLimit, states, designations, debouncedParkName, sortOrder);
  }, [getParksData, currentPage, resultLimit, states, designations, debouncedParkName, sortOrder]);

  return (
    <FullPageBackground backgroundImg={mountainBackground}>
      <h1>Parks Page</h1>
      <Table
        history={history}
        columns={columns}
        data={parkData}
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
        entryStart={entryStart}
        entryEnd={entryEnd}
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
