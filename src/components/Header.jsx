import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c); /* Updated gradient */
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: white; /* Updated to match gradient text */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    color: white; /* Icon color matches the text */
  }
`;

const Header = () => (
  <>
    <HeaderWrapper>
      <Info>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:contact@softedgedevelopment.com">contact@softedgedevelopment.com</a>
      </Info>
      <Info>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <a href="https://www.google.com/maps/place/Seattle,+WA/@47.6088285,-122.5046049,11z/data=!3m1!4b1!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6061389!4d-122.3328481!16zL20vMGQ5anI?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D">Seattle, Washington</a>
      </Info>
    </HeaderWrapper>
    <Navbar />
  </>
);

export default Header;