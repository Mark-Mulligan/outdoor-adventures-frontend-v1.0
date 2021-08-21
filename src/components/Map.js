import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import ParkInfoSection from './ParkInfoSection';

const mapContainerStyle = {
  height: '60vh',
  width: '100%',
};

const Map = ({ googleMapsKey, lat, lng }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsKey,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <ParkInfoSection id="location">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </ParkInfoSection>
  );
};

export default Map;
