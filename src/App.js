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
  const [parkName, setParkName] = useState('');
  const [debouncedParkName, setDebouncedParkName] = useState('');
  const [states, setStates] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultLimit, setResultLimit] = useState(10);

  const checkApiOnline = useCallback(async () => {
    try {
      const response = await axios.get(`https://nationalparksbackend.herokuapp.com/api/testconnection`);
      if (response.status === 200) {
        setApiUp(true);
      } else {
        setApiUp(false);
      }
      console.log(response);
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
