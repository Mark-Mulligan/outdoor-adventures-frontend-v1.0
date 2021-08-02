import PulseLoader from 'react-spinners/PulseLoader';

import cliffsAndRoad from '../images/cliffsAndRoad.jpg';
import OpaqueContainer from '../components/OpaqueContainer';
import FullPageBackground from '../components/FullPageBackground';

const LoadingPage = () => {
  return (
    <FullPageBackground backgroundImg={cliffsAndRoad} paddingTop="30vh">
      <OpaqueContainer maxWidth="700px">
        <h2>
          If you see this screen, that means the application is loading. This should only happen once the first time you
          visit the site and might take serveral seconds.
        </h2>
        <div>
          <PulseLoader />
        </div>
      </OpaqueContainer>
    </FullPageBackground>
  );
};

export default LoadingPage;
