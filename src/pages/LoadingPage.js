import PulseLoader from 'react-spinners/PulseLoader';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContent = styled.div`
  max-width: 700px;
  text-align: center;
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
