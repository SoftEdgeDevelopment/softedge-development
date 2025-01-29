import styled from "styled-components";

const FooterBottom = styled.div`
  background-color: #222;
  padding: 1.5rem 0; /* Added spacing to the top and bottom */
  text-align: center; /* Centering the content */
`;

const FooterSmallLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.75rem;
  margin-bottom: 1rem; /* Added spacing below the links */

  a {
    color: white;
    text-decoration: none;
    padding: 0.75rem 1rem;
    position: relative;
    border-radius: 8px;
    transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease;
    display: inline-block;
    border: 2px solid transparent; /* Default border to ensure smooth hover transition */

    /* Hover effect */
    &:hover {
      background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
      color: white;
      padding-bottom: 5px;
      border-color: white; /* White border on hover */
    }

    /* Gradient border with pseudo-element */
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
      padding: 2px; /* Border thickness */
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      transition: background-color 0.3s ease;
    }

    &:hover::before {
      background: white;
    }
  }
`;

const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.6); /* Making the copyright text lighter */
  font-size: 0.75rem;
  margin-top: 0; /* Removed extra margin at the top */
`;

const Copyright = () => (
  <FooterBottom>
    <FooterSmallLinks>
      <a href="/terms">Terms of Service</a>
      <a href="/privacy">Privacy Policy</a>
    </FooterSmallLinks>
    <CopyrightText>© 2025 SoftEdge Development. All rights reserved.</CopyrightText>
  </FooterBottom>
);

export default Copyright;