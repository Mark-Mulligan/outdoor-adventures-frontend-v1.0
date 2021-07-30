import styled from 'styled-components';

const OpaqueContainer = styled.div`
  text-align: center;
  max-width: ${(props) => props.maxWidth || '%100'};
  padding: 15px;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

export default OpaqueContainer;
