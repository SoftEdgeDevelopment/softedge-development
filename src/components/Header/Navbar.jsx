import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  background: #222;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  z-index: 100;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  height: 50px;

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 8px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavItem = styled(Link)`
  color: white;
  background: transparent;
  padding: 0.4rem 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 6px;

  &:hover {
    background: white;
    color: black;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const ServicesButton = styled.div`
  color: white;
  background: transparent;
  padding: 0.4rem 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid black;
  border-radius: 6px;

  &:hover {
    background: white;
    color: black;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  background: white;
  color: black;
  border-radius: 8px;
  border: 2px solid black;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 0.95rem;
  font-weight: bold;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  position: relative;

  &:hover {
    background: black;
    color: white;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: black;
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <DropdownContent $isOpen={isDropdownOpen}>
            <DropdownItem to="/services/web-development" onClick={closeDropdown}>
              Web Development
            </DropdownItem>
            <DropdownItem to="/services/quality-test-automation" onClick={closeDropdown}>
              Quality & Test Automation
            </DropdownItem>
            <DropdownItem to="/services/user-experience-design" onClick={closeDropdown}>
              User Experience Design
            </DropdownItem>
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