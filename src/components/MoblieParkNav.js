import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const MobileParkNavContainer = styled.nav`
  background: rgba(220, 220, 220, 0.9);
  position: relative;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

const ExpandingNavLinks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(220, 220, 220, 0.9);
  transform: ${(props) => (props.open ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.5s;
  overflow: hidden;
`;

const NavLink = styled.a`
  :hover {
    color: white;
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
  text-decoration: none;
  display: block;
  color: inherit;
  font-size: 20px;
`;

const MobileParkNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenuClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <MobileParkNavContainer>
      <BackLink to="/parks">
        <i className="fas fa-sm fa-arrow-left"></i> Back to parks
      </BackLink>
      <HamburgerMenu width={24} height={20} isOpen={navOpen} menuClicked={handleMenuClick} />
      <ExpandingNavLinks open={navOpen}>
        <li>
          <NavLink href="#description" onClick={handleMenuClick}>
            Description
          </NavLink>
        </li>
        <li>
          <NavLink href="#entrance-fees" onClick={handleMenuClick}>
            Entrance Fees
          </NavLink>
        </li>
        <li>
          <NavLink href="#hours" onClick={handleMenuClick}>
            Hours
          </NavLink>
        </li>
        <li>
          <NavLink href="#activites" onClick={handleMenuClick}>
            Actvities
          </NavLink>
        </li>
        <li>
          <NavLink href="#location" onClick={handleMenuClick}>
            Location
          </NavLink>
        </li>
        <li>
          <NavLink href="#contact" onClick={handleMenuClick}>
            Contact Info
          </NavLink>
        </li>
        <li>
          <NavLink href="#photos" onClick={handleMenuClick}>
            Photos
          </NavLink>
        </li>
      </ExpandingNavLinks>
    </MobileParkNavContainer>
  );
};

export default MobileParkNav;
