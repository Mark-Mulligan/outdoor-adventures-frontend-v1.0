import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileParkNavContainer = styled.nav`
  background: grey;
  position: fixed;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const ExpandingNavLinks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: grey;
  transform: ${(props) => (props.open ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.5s;
  overflow: hidden;
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

const BackLink = styled(Link)`
  :hover {
    color: white;
    cursor: pointer;
  }
  text-align: left;
  display: block;
  color: inherit;
  font-size: 20px;
`;

const MobileParkNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <MobileParkNavContainer>
      <BackLink to="/parks">
        <i className="fas fa-sm fa-arrow-left"></i> Back to parks
      </BackLink>
      <div style={{ height: 25, width: 25, background: 'black' }} onClick={() => setNavOpen(!navOpen)}></div>
      <ExpandingNavLinks open={navOpen}>
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
      </ExpandingNavLinks>
    </MobileParkNavContainer>
  );
};

export default MobileParkNav;
