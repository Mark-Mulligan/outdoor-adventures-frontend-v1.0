import { Link } from 'react-router-dom';

import OpaqueContainer from '../components/OpaqueContainer';
import FullPageBackground from '../components/FullPageBackground';

const LandingPage = () => {
  return (
    <FullPageBackground backgroundImg="./images/mountainForestBackground-min.jpg" paddingTop="30vh">
      <OpaqueContainer maxWidth="650px">
        <h1>Outdoor Adventures</h1>
        <p>
          Welcome to outdoor adventures, your guide to the national parks in the United States. Easily search all
          national parks and look up specific information on each to help you plan your next adventure.
        </p>
        <Link to="/parks" className="btn btn-outline-dark">
          Search Parks
        </Link>
      </OpaqueContainer>
    </FullPageBackground>
  );
};

export default LandingPage;
