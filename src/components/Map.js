import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

import ParkInfoSection from './ParkInfoSection';

const MapContainer = styled.div`
  height: 60vh;
  width: 100%;
`;

const Map = ({ lat, lng }) => {
  return (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: lat, lng: lng }}>
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapSection = ({ lat, lng, googleMapsKey }) => {
  return (
    <ParkInfoSection id="location">
      <h2>Location</h2>
      <hr></hr>
      <MapContainer>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapsKey}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          lat={lat}
          lng={lng}
        />
      </MapContainer>
    </ParkInfoSection>
  );
};

export default MapSection;
