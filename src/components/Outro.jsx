import styled from "styled-components";

const FooterTop = styled.div`
  background-color: #222; /* Default dark background */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  gap: 0.5rem; /* Small space between logo and text */
  padding: 0.5rem 1rem; /* Minimal padding for a thin height */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack logo and text vertically on smaller screens */
    text-align: center; /* Center-align text */
    gap: 0.75rem; /* Slightly larger gap for stacked layout */
  }
`;

const Logo = styled.img`
  width: 40px; /* Adjusted logo size for consistency */
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem; /* Extra spacing below logo when stacked */
  }
`;

const MissionStatement = styled.p`
  color: rgba(255, 255, 255, 0.6); /* Subtle text color */
  font-size: 0.75rem; /* Consistent font size */
  margin: 0; /* Removed default margin */
  text-align: center; /* Center text alignment */
`;

const Outro = () => (
  <FooterTop>
    <Logo src="/assets/logo.png" alt="SoftEdge Development Logo" />
    <MissionStatement>
      At SoftEdge Development, we believe that a customer experience is the aggregate of all the touch points that our clients experience with our services.
    </MissionStatement>
  </FooterTop>
);

export default Outro;