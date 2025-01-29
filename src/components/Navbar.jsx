import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  z-index: 100;
  border-top: 4px solid;
  border-bottom: 4px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1; /* Gradient on top and bottom */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }
`;

const Logo = styled(Link)`
  display: block;
  width: 120px;
  margin-bottom: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 150px;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const NavItem = styled(Link)`
  color: #333;
  background: white;
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  z-index: 0;

  /* Hover effect */
  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
  }

  /* Gradient border with pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 8px; /* Matches parent radius */
    padding: 3px; /* Border thickness */
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: background-color 0.3s ease;
  }

  /* Change border to white on hover */
  &:hover::before {
    background: white;
  }
`;

const Dropdown = styled.div`
  position: relative;

  /* Show dropdown content on hover */
  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #333;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  display: none;
  z-index: 10;
  min-width: 160px;
  overflow: hidden;

  /* Gradient border */
  border: 4px solid transparent;
  background-clip: padding-box;
  border-image-source: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  border-image-slice: 1;

  /* Separate items with gradient line */
  & > a:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      right: 10%;
      height: 2px;
      background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
      transition: opacity 0.3s ease;
    }
  }

  /* Hover effect for line separation */
  & > a:hover::after {
    opacity: 0;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <Logo to="/">
        <img src="/assets/logo.png" alt="SoftEdge Development Logo" />
      </Logo>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <Dropdown>
          <NavItem as="div">Services</NavItem>
          <DropdownContent>
            <DropdownItem to="/services/digital-strategy">Digital Strategy</DropdownItem>
            <DropdownItem to="/services/agile-management">Agile Management</DropdownItem>
            <DropdownItem to="/services/big-data-data-science">Big Data & Data Science</DropdownItem>
            <DropdownItem to="/services/cloud-infrastructures">Cloud Infrastructures</DropdownItem>
            <DropdownItem to="/services/quality-test-automation">Quality & Test Automation</DropdownItem>
            <DropdownItem to="/services/user-experience-design">User Experience Design</DropdownItem>
          </DropdownContent>
        </Dropdown>
        <NavItem to="/careers">Careers</NavItem>
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;