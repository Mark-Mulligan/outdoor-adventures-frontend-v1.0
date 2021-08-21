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
  const [googleMapsKey, setGoogleMapsKey] = useState('');

  const checkApiOnline = useCallback(async () => {
    try {
      const response = await axios.get(`https://nationalparksbackend.herokuapp.com/api/testconnection`);
      if (response.status === 200) {
        setApiUp(true);
        const apiKey = await axios.get(`https://nationalparksbackend.herokuapp.com/api/googlemaps`);
        setGoogleMapsKey(apiKey.data.data);
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
      <Route exact path="/parks" component={ParksPage} />
      <Route exact path="/parks/:parkcode" render={(props) => <ParkPage {...props} googleMapsKey={googleMapsKey} />} />
    </BrowserRouter>
  ) : (
    <LoadingPage />
  );
}

export default App;
