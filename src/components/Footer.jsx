import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c); /* Gradient background */
  padding: 2rem 1rem;
  width: 100vw; /* Full viewport width */
  box-sizing: border-box; /* Include padding and border in width calculation */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  color: white;
  overflow-x: hidden; /* Prevent any horizontal overflow */
  margin: 0; /* Remove default margins */
`;

const FooterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* Perfectly even spacing */
  gap: 2rem;
  width: 100%;
  max-width: 1200px; /* Matches project width */
  padding: 2rem 1rem;
  margin: 0 auto;
  justify-content: space-evenly; /* Ensures equal spacing for all 3 sections */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack sections on smaller screens */
    text-align: center;
    gap: 1rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr)); /* 2-column layout */
  gap: 1rem;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    position: relative;
    border: 2px solid #222;
    text-align: center;

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

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    max-width: 300px;
    border: 2px solid #222;

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

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    font-size: 1.5rem;
    color: white;
    transition: color 0.3s ease;
    padding: 1rem;
    border-radius: 50%;
    border: 2px solid #222;

    &:hover {
      background-color: #222;
      color: white;
      border-color: white;
    }
  }
`;

const FooterTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 2px solid white;
  padding-bottom: 5px;
  color: white;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterSection>

    {/* Useful Links Section */}
    <FooterColumn>
            <FooterTitle>Useful Links</FooterTitle>
            <FooterLinks>
            <a href="/services/digital-strategy">Digital Strategy</a>
            <a href="/services/agile-management">Agile Management</a>
            <a href="/services/big-data-data-science">Big Data & Data Science</a>
            <a href="/services/cloud-infrastructures">Cloud Infrastructures</a>
            <a href="/services/quality-test-automation">Quality & Test Automation</a>
            <a href="/services/user-experience-design">User Experience Design</a>
            </FooterLinks>
        </FooterColumn>

      {/* Contact Info Section */}
      <FooterColumn>
        <FooterTitle>Contact Info</FooterTitle>
        <FooterInfo>
          <a href="mailto:contact@softedgedevelopment.com">contact@softedgedevelopment.com</a>
          <a href="https://www.google.com/maps/place/Seattle,+WA/">Seattle, Washington</a>
        </FooterInfo>
      </FooterColumn>
      {/* Follow Us Section */}
    <FooterColumn>
        <FooterTitle>Follow Us</FooterTitle>
        <FooterSocial>
          
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </FooterSocial>
      </FooterColumn>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;