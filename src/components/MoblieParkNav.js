import styled from 'styled-components';

import UnorderedListNoStyle from './UnorderedListNoStyle';

const MobileParkNavContainer = styled.nav`
  background: grey;
  position: fixed;
  height: 50px;
`;

const NavLink = styled.a`
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

const MobileParkNav = () => {
  return (
    <MobileParkNavContainer>
      <UnorderedListNoStyle>
        <li className="back-link">
          <NavLink to="/parks">
            <i className="fas fa-sm fa-arrow-left"></i> Back to parks
          </NavLink>
        </li>
        <li>
          <NavLink href="#description">Description</NavLink>
        </li>
        <li>
          <NavLink href="#entrance-fees">Entrance Fees</NavLink>
        </li>
        <li>
          <NavLink href="#hours">Hours</NavLink>
        </li>
        <li>
          <NavLink href="#activites">Actvities</NavLink>
        </li>
        <li>
          <NavLink href="#contact">Contact Info</NavLink>
        </li>
        <li>
          <NavLink href="#photos">Photos</NavLink>
        </li>
      </UnorderedListNoStyle>
    </MobileParkNavContainer>
  );
};

export default MobileParkNav;
