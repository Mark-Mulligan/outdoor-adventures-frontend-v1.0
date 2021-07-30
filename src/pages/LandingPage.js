import styled from 'styled-components';

import OpaqueContainer from '../components/OpaqueContainer';

const LandingPageBackground = styled.div`
  height: 100vh;
  background: url('./images/mountainForestBackground-min.jpg');
  background-size: cover;
  padding-top: 30vh;
`;

const LandingPage = () => {
  return (
    <LandingPageBackground>
      <OpaqueContainer maxWidth="650px">
        <h1>Outdoor Adventures</h1>
        <p>
          Welcome to outdoor adventures, your guide to the national parks in the United States. Easily search all
          national parks and look up specific information on each to help you plan your next adventure.
        </p>
        <button className="btn btn-outline-dark">Search Parks</button>
      </OpaqueContainer>
    </LandingPageBackground>
  );
};

export default LandingPage;
