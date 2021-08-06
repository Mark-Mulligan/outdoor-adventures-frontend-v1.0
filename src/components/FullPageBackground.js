import styled from 'styled-components';

const FullPageBackground = styled.div`
  height: 100vh;
  background-image: ${(props) => `url(${props.backgroundImg})` || 'green'};
  background-size: cover;
  overflow: auto;
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-bottom: ${(props) => props.paddingBottom || '0'};
  padding-left: ${(props) => props.paddingLeft || '15px'};
  padding-right: ${(props) => props.paddingRight || '15px'};
`;

export default FullPageBackground;
