import styled from 'styled-components';

const LandingPageBackground = styled.div`
  height: 100vh;
  background: url('./images/mountainForestBackground-min.jpg');
  background-size: cover;
  padding-top: 30vh;
`;

const LandingPageContent = styled.div`
  text-align: center;
  max-width: 650px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const LandingPage = () => {
  return (
    <LandingPageBackground>
      <LandingPageContent className="container-fluid">
        <h1>Outdoor Adventures</h1>
        <p>
          Welcome to outdoor adventures, your guide to the national parks in the United States. Easily search all
          national parks and look up specific information on each to help you plan your next adventure.
        </p>
        <button className="btn btn-outline-dark">Search Parks</button>
      </LandingPageContent>
    </LandingPageBackground>
  );
};

export default LandingPage;
