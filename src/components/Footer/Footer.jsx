import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background: #222;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0;
  padding: 0.5rem 1rem; /* ✅ Minimal padding */
`;

const FooterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem; /* ✅ Reduced spacing */
  width: 100%;
  max-width: 1200px;
  align-items: start;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    text-align: center;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 0.5rem;
  justify-content: center;
`;

const handleNavigation = (path) => {
  window.location.href = path;
};

const FooterNavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    background: white;
    color: black;
    border-color: black;
    border-radius: 16px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    text-align: center;
    min-width: 240px; /* ✅ Slightly wider buttons */
    max-width: 280px; /* ✅ More space to prevent squeezing */
    width: 100%; /* ✅ Adjusts dynamically */
    height: 44px; /* ✅ Slightly taller for balance */
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
    white-space: nowrap;
    flex-grow: 1;
    padding-left: 1.5rem; /* ✅ Adds space inside button */
    padding-right: 1.5rem; /* ✅ Adds space inside button */

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
      border-radius: 16px;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

// Social Media Buttons
const FooterSocial = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  a {
    font-size: 1.2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 8px;
    border: 2px solid black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
      border-radius: 16px;
    }
  }
`;

const FooterTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid white;
  padding-bottom: 3px;
  color: white;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterSection>
      {/* Useful Links Section */}
      <FooterColumn>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterLinks>
        <FooterNavItem onClick={() => handleNavigation("/blog")}>Blog</FooterNavItem>
        <FooterNavItem onClick={() => handleNavigation("/about")}>About Us</FooterNavItem>
        <FooterNavItem onClick={() => handleNavigation("/careers")}>Careers</FooterNavItem>
        
          <FooterNavItem onClick={() => handleNavigation("/services/web-development")}>Web Development</FooterNavItem>
          <FooterNavItem onClick={() => handleNavigation("/services/quality-test-automation")}>Quality & Test Automation</FooterNavItem>
          <FooterNavItem onClick={() => handleNavigation("/services/user-experience-design")}>User Experience Design</FooterNavItem>
        </FooterLinks>
      </FooterColumn>

      {/* Contact Info Section */}
      <FooterColumn>
        <FooterTitle>Contact Info</FooterTitle>
        <FooterInfo>
          <a href="mailto:contact@softedgedevelopment.com">
            <FontAwesomeIcon icon={faEnvelope} /> contact@softedgedevelopment.com
          </a>
          <a href="https://www.google.com/maps/place/Seattle,+WA/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Seattle, Washington
          </a>
        </FooterInfo>
      </FooterColumn>

      {/* Follow Us Section */}
      <FooterColumn>
        <FooterTitle>Follow Us</FooterTitle>
        <FooterSocial>
          <a href="https://www.github.com/SoftEdgeDevelopment"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://twitter.com/softedgedev"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/softedgedev"><FontAwesomeIcon icon={faInstagram} /></a>
        </FooterSocial>
      </FooterColumn>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;