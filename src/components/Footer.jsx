import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const FooterNavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.5rem 0.75rem; /* ✅ Reduced padding */
  border-radius: 8px;
  text-align: center;
  border: 2px solid #222;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    background-color: #222;
    color: white;
    border-color: white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 8px;
    padding: 2px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  &:hover::before {
    background: white;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* ✅ Reduced gap */

  a {
    display: flex;
    align-items: center; /* ✅ Aligns icon & text next to each other */
    gap: 0.5rem; /* ✅ Space between icon and text */
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    padding: 0.5rem 0.75rem; /* ✅ Reduced padding */
    border-radius: 8px;
    position: relative;
    text-align: left; /* ✅ Aligns text properly */
    width: fit-content;
    border: 2px solid #222;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #222;
      color: white;
      border-color: white;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
      z-index: -1;
      border-radius: 8px;
      padding: 2px;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    &:hover::before {
      background: white;
    }

    svg {
      font-size: 1rem; /* ✅ Adjust icon size */
    }
  }
`;

/* ✅ Square Social Media Buttons */
const FooterSocial = styled.div`
  display: flex;
  gap: 0.5rem; /* ✅ Reduced gap */
  justify-content: center;

  a {
    font-size: 1.2rem; /* ✅ Slightly smaller */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px; /* ✅ Smaller size */
    height: 45px;
    border-radius: 8px;
    border: 2px solid #222;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: #222;
      color: white;
      border-color: white;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
      z-index: -1;
      border-radius: 8px;
      padding: 2px;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    &:hover::before {
      background: white;
    }
  }
`;

const FooterTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem; /* ✅ Reduced margin */
  border-bottom: 2px solid white;
  padding-bottom: 3px; /* ✅ Smaller spacing */
  color: white;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterSection>
      {/* Useful Links Section */}
      <FooterColumn>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterLinks>
          <FooterNavItem to="/services/digital-strategy" onClick={scrollToTop}>Digital Strategy</FooterNavItem>
          <FooterNavItem to="/services/agile-management" onClick={scrollToTop}>Agile Management</FooterNavItem>
          <FooterNavItem to="/services/big-data-data-science" onClick={scrollToTop}>Big Data & Data Science</FooterNavItem>
          <FooterNavItem to="/services/cloud-infrastructures" onClick={scrollToTop}>Cloud Infrastructures</FooterNavItem>
          <FooterNavItem to="/services/quality-test-automation" onClick={scrollToTop}>Quality & Test Automation</FooterNavItem>
          <FooterNavItem to="/services/user-experience-design" onClick={scrollToTop}>User Experience Design</FooterNavItem>
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
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          
        </FooterSocial>
      </FooterColumn>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;