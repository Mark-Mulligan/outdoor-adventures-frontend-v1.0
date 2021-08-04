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

const ParkInfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  margin-top: 3vh;
  height: 94vh;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 300px auto;
`;

const ParkInfo = styled.div`
  overflow: auto;
  padding: 15px;
`;

const ParkPage = ({ history }) => {
  const [parkData, setParkData] = useState([]);
  let { parkcode } = useParams();

  const getParkData = useCallback(async () => {
    const response = await axios.get(`https://nationalparksbackend.herokuapp.com/api/parks/${parkcode}`);
    setParkData(response.data[0]);
    console.log(response.data[0]);
  }, [parkcode]);

  useEffect(() => {
    getParkData();
  }, [getParkData]);

  return (
    <FullPageBackground backgroundImg={mountainBackground}>
      <ParkInfoContainer>
        <ParkInfoNav />
        <ParkInfo>
          {parkData.fullName && <h1>{parkData.fullName}</h1>}
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
