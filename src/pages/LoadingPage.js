import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';

import OpaqueContainer from '../components/OpaqueContainer';

const LoadingContainer = styled.div`
  height: 100vh;
  background: url('./images/cliffsAndRoad.jpg');
  background-size: cover;
  padding-top: 30vh;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <OpaqueContainer maxWidth="700px">
        <h2>
          If you see this screen, that means the application is loading. This should only happen once the first time you
          visit the site and might take serveral seconds.
        </h2>
        <div>
          <PulseLoader />
        </div>
      </OpaqueContainer>
    </LoadingContainer>
  );
};

export default LoadingPage;
