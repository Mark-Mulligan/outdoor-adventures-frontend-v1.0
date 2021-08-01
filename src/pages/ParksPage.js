import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Table from '../components/Table';
import FullPageBackground from '../components/FullPageBackground';

const columns = [
  { name: 'Name', accessor: 'fullname' },
  { name: 'Park Code', accessor: 'parkcode' },
  { name: 'State(s)', accessor: 'states' },
  { name: 'Designation', accessor: 'designation' },
];

const ParksPage = () => {
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

  const getParksData = useCallback(async (page, limit, states, designation, parkQuery) => {
    let apiRequestStr = `https://nationalparksbackend.herokuapp.com/api/parks?page=${page}&limit=${limit}`;
    if (states.length > 0) apiRequestStr += `&states=${states.join(',')}`;
    if (designation.length > 0) apiRequestStr += `&designation=${designation.join(',')}`;
    if (parkQuery) apiRequestStr += `&q=${parkQuery}`;

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
    getParksData(currentPage, resultLimit, states, designations, debouncedParkName);
  }, [getParksData, currentPage, resultLimit, states, designations, debouncedParkName]);

  return (
    <FullPageBackground backgroundImg="./images/mountainForestBackground-min.jpg">
      <h1>Parks Page</h1>
      <Table columns={columns} data={parkData} pagination />
    </FullPageBackground>
  );
};

export default ParksPage;
