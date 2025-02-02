import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 1.5rem 2rem;
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
    justify-content: center;
  }
`;

const NavItem = styled(Link)`
  color: white; /* ✅ Changed text to white */
  background: transparent;
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  z-index: 0;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 8px;
    padding: 3px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background: white;
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const ServicesButton = styled.div`
  color: white; /* ✅ Changed text to white */
  background: transparent;
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  z-index: 0;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 8px;
    padding: 3px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background: white;
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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
  min-width: 180px;
  overflow: hidden;
  border: 4px solid transparent;
  background-clip: padding-box;
  border-image-source: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  border-image-slice: 1;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 10%;
    width: 80%;
    height: 2px;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleClick = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <NavWrapper>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>

        <Dropdown ref={dropdownRef}>
          <ServicesButton onClick={handleClick}>Services</ServicesButton>
          <DropdownContent isOpen={isDropdownOpen}>
            <DropdownItem to="/services/digital-strategy" onClick={closeDropdown}>Digital Strategy</DropdownItem>
            <DropdownItem to="/services/agile-management" onClick={closeDropdown}>Agile Management</DropdownItem>
            <DropdownItem to="/services/big-data-data-science" onClick={closeDropdown}>Big Data & Data Science</DropdownItem>
            <DropdownItem to="/services/cloud-infrastructures" onClick={closeDropdown}>Cloud Infrastructures</DropdownItem>
            <DropdownItem to="/services/quality-test-automation" onClick={closeDropdown}>Quality & Test Automation</DropdownItem>
            <DropdownItem to="/services/user-experience-design" onClick={closeDropdown}>User Experience Design</DropdownItem>
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