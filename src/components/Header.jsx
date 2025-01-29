import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  color: white;
  padding: 0.75rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
  }
`;

/* Desktop Info (Top Left & Top Right) */
const Info = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
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

  @media (max-width: 768px) {
    display: none; /* Hide corner buttons on mobile */
  }
`;

/* Mobile Icons (Center - Visible Only on Mobile) */
const MobileIcons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const MobileIconButton = styled.a`
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
`;

const Header = () => (
  <>
    <HeaderWrapper>
      {/* Email (Top Left) - Hidden on Mobile */}
      <Info href="mailto:contact@softedgedevelopment.com" style={{ justifySelf: "start" }}>
        <FontAwesomeIcon icon={faEnvelope} />
        contact@softedgedevelopment.com
      </Info>

      {/* Mobile Icons (Visible Only on Mobile) */}
      <MobileIcons>
        <MobileIconButton href="mailto:contact@softedgedevelopment.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </MobileIconButton>
        <MobileIconButton
          href="https://www.google.com/maps/place/Seattle,+WA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </MobileIconButton>
      </MobileIcons>

      {/* Location (Top Right) - Hidden on Mobile */}
      <Info
        href="https://www.google.com/maps/place/Seattle,+WA/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ justifySelf: "end" }}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Seattle, Washington
      </Info>
    </HeaderWrapper>
    <Navbar />
  </>
);

export default Header;