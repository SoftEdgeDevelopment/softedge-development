import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar.jsx";

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, black, grey, white);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

// Logo Styling (Always Centered)
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const LogoLink = styled(Link)`
  display: block;
  width: 160px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 130px;
  }
`;

// Contact Info Wrapper (Centers Email, GitHub & Location)
const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

// Contact Buttons (Email, GitHub, Location)
const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  width: 170px; /* ✅ Forces uniform width */
  height: 42px; /* ✅ Forces uniform height */

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 42px;
    height: 42px;

    /* ✅ Hides text inside button on mobile */
    span {
      display: none;
    }
  }
`;

const Header = () => (
  <>
    <HeaderWrapper>
      {/* Logo (PERFECTLY CENTERED) */}
      <LogoWrapper>
        <LogoLink to="/">
          <img src="/assets/logo.png" alt="SoftEdge Development Logo" />
        </LogoLink>
      </LogoWrapper>

      {/* Contact Info (Centered Below Logo) */}
      <ContactWrapper>
        <ContactButton href="mailto:contact@softedgedevelopment.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </ContactButton>

        <ContactButton href="https://github.com/SoftEdgeDevelopment" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </ContactButton>

        <ContactButton href="https://www.google.com/maps/place/Seattle,+WA/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Location</span>
        </ContactButton>
      </ContactWrapper>
    </HeaderWrapper>

    <Navbar />
  </>
);

export default Header;