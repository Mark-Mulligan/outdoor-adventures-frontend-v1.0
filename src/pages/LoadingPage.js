import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
  background: url('./images/cliffsAndRoad.jpg');
  background-size: cover;
  padding-top: 30vh;
`;

const LoadingContent = styled.div`
  max-width: 700px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <LoadingContent className="container-fluid">
        <h2>
          If you see this screen, that means the application is loading. This should only happen once the first time you
          visit the site and might take serveral seconds.
        </h2>
        <div>
          <PulseLoader />
        </div>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingPage;
