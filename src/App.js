import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import LandingPage from './pages/LandingPage';
import LoadingPage from './pages/LoadingPage';
import ParksPage from './pages/ParksPage';
import ParkPage from './pages/ParkPage';
import './App.css';

function App() {
  const [apiUp, setApiUp] = useState(false);
  const [parkData, setParkData] = useState([]);
  const [parkName, setParkName] = useState('');
  const [debouncedParkName, setDebouncedParkName] = useState('');
  const [states, setStates] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultLimit, setResultLimit] = useState(10);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [entryStart, setEntryStart] = useState(0);
  const [entryEnd, setEntryEnd] = useState(0);
  const [sortOrder, setSortOrder] = useState('');
  const [lastSearchUrl, setLastSearchUrl] = useState('');

  const checkApiOnline = useCallback(async () => {
    try {
      const response = await axios.get(`https://nationalparksbackend.herokuapp.com/api/testconnection`);
      if (response.status === 200) {
        setApiUp(true);
      } else {
        setApiUp(false);
      }
    } catch (err) {
      console.log(err);
      setApiUp(false);
    }
  }, []);

  useEffect(() => {
    checkApiOnline();
  }, [checkApiOnline]);

  return apiUp ? (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route
        exact
        path="/parks"
        render={(props) => (
          <ParksPage
            {...props}
            parkData={parkData}
            setParkData={setParkData}
            parkName={parkName}
            setParkName={setParkName}
            debouncedParkName={debouncedParkName}
            setDebouncedParkName={setDebouncedParkName}
            states={states}
            setStates={setStates}
            designations={designations}
            setDesignations={setDesignations}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            resultLimit={resultLimit}
            setResultLimit={setResultLimit}
            totalResults={totalResults}
            setTotalResults={setTotalResults}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            entryStart={entryStart}
            setEntryStart={setEntryStart}
            entryEnd={entryEnd}
            setEntryEnd={setEntryEnd}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            lastSearchUrl={lastSearchUrl}
            setLastSearchUrl={setLastSearchUrl}
          />
        )}
      />
      <Route exact path="/parks/:parkcode" component={ParkPage} />
    </BrowserRouter>
  ) : (
    <LoadingPage />
  );
}

export default App;
