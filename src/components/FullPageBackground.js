import styled from 'styled-components';

const FullPageBackground = styled.div`
  height: 100vh;
  background-image: ${(props) => `url(${props.backgroundImg})` || 'green'};
  background-size: cover;
  overflow: auto;
  padding-top: ${(props) => props.paddingTop || '5vh'};
  padding-bottom: ${(props) => props.paddingBottom || '10px'};
`;

export default FullPageBackground;
