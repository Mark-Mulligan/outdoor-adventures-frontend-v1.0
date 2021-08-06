import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import mountainBackground from '../images/mountainForestBackground-min.jpg';
import FullPageBackground from '../components/FullPageBackground';
import ParkInfoNav from '../components/ParkInfoNav';
import ParkDescription from '../components/ParkDescription';
import EntranceFees from '../components/EntranceFees';
import ParkHours from '../components/ParkHours';
import Actvities from '../components/Activites';
import Contact from '../components/Contact';
import ParkPhotos from '../components/ParkPhotos';
import MobileParkNav from '../components/MoblieParkNav';

const ParkInfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  height: calc(100vh - 60px);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 300px auto;
  position: relative;
  @media (max-width: 900px) {
    display: block;
    overflow: auto;
    border-radius: 0;
    height: calc(100vh - 76px);
  }
  @media (max-width: 500px) {
    height: calc(100vh - 46px);
  }
`;

const ParkTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const ParkInfo = styled.div`
  overflow: auto;
  padding: 15px;
`;

const getWindowWidth = () => {
  const { innerWidth } = window;
  return innerWidth;
};

const setPadding = (screenWidth) => {
  if (screenWidth <= 500) return '0px';
  else if (screenWidth <= 900) return '15px';
  else return '30px';
};

const ParkPage = ({ history }) => {
  const [parkData, setParkData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  let { parkcode } = useParams();

  const getParkData = useCallback(async () => {
    const response = await axios.get(`https://nationalparksbackend.herokuapp.com/api/parks/${parkcode}`);
    setParkData(response.data[0]);
    console.log(response.data[0]);
  }, [parkcode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getParkData();
  }, [getParkData]);

  return (
    <FullPageBackground
      backgroundImg={mountainBackground}
      paddingTop={setPadding(windowWidth)}
      paddingBottom={setPadding(windowWidth)}
      paddingLeft={windowWidth <= 500 ? '0px' : '15px'}
      paddingRight={windowWidth <= 500 ? '0px' : '15px'}
    >
      {windowWidth <= 900 && <MobileParkNav />}
      <ParkInfoContainer>
        {windowWidth > 900 && <ParkInfoNav />}
        <ParkInfo>
          {parkData.fullName && <ParkTitle>{parkData.fullName}</ParkTitle>}
          {parkData.description && <ParkDescription parkDescription={parkData.description} />}
          {parkData.entranceFees && <EntranceFees feeData={parkData.entranceFees} />}
          {parkData.operatingHours && <ParkHours operatingHours={parkData.operatingHours} />}
          {parkData.activities && <Actvities activities={parkData.activities} />}
          {parkData.contacts && <Contact contactInfo={parkData.contacts} websiteUrl={parkData.url} />}
          {parkData.images && <ParkPhotos photos={parkData?.images} />}
        </ParkInfo>
      </ParkInfoContainer>
    </FullPageBackground>
  );
};

export default ParkPage;
