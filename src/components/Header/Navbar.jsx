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
  border-image: linear-gradient(90deg, black, grey, white) 1;

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
`;

const NavItem = styled(Link)`
  color: white;
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
    background: white;
    color: black;
    border-color: black;
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const ServicesButton = styled.div`
  color: white;
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
    background: white;
    color: black;
    border-color: black;
  }
`;

/* ✅ MODERN STYLED SERVICES DROPDOWN */
const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  background: white;
  color: black;
  border-radius: 12px; /* ✅ Fully Rounded */
  border: 3px solid black; /* ✅ Fully Black Border */
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
`;

/* ✅ DROPDOWN ITEM WITH FULL-WIDTH UNDERLINE */
const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  position: relative;

  &:hover {
    background: black;
    color: white;
  }

  /* ✅ FULL-WIDTH BLACK UNDERLINE (EXCEPT LAST ITEM) */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: black;
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleClick = () => {
    setDropdownOpen((prev) => !prev);
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
            <DropdownItem to="/services/web-development" onClick={closeDropdown}>Web Development</DropdownItem>
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