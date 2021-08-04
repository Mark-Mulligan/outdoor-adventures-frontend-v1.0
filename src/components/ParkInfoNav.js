import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UnorderedListNoStyle from './UnorderedListNoStyle';

const ParkNavContainer = styled.nav`
  padding-top: 15px;
`;

const ParkNavLink = styled.a`
  :hover {
    color: grey;
  }
  text-align: center;
  color: inherit;
  text-decoration: none;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;

const ParkBackLink = styled(Link)`
  :hover {
    color: grey;
  }
  text-align: center;
  display: block;
  color: inherit;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 22px;
`;

const ParkInfoNav = () => {
  return (
    <ParkNavContainer>
      <UnorderedListNoStyle>
        <li className="back-link">
          <ParkBackLink to="/parks">
            <i className="fas fa-sm fa-arrow-left"></i> Back to parks
          </ParkBackLink>
        </li>
        <li>
          <ParkNavLink href="#description">Description</ParkNavLink>
        </li>
        <li>
          <ParkNavLink href="#entrance-fees">Entrance Fees</ParkNavLink>
        </li>
        <li>
          <ParkNavLink href="#hours">Hours</ParkNavLink>
        </li>
        <li>
          <ParkNavLink href="#activites">Actvities</ParkNavLink>
        </li>
        <li>
          <ParkNavLink href="#contact">Contact Info</ParkNavLink>
        </li>
        <li>
          <ParkNavLink href="#photos">Photos</ParkNavLink>
        </li>
      </UnorderedListNoStyle>
    </ParkNavContainer>
  );
};

export default ParkInfoNav;
