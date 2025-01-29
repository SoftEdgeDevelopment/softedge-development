import styled from "styled-components";

const FooterBottom = styled.div`
  background-color: #222;
  padding: 0.5rem 0; /* ✅ Drastically reduced spacing */
  text-align: center;
`;

const FooterSmallLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem; /* ✅ Reduced gap */
  font-size: 0.75rem;
  margin-bottom: 0.25rem; /* ✅ Reduced spacing */

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 0.75rem; /* ✅ More compact padding */
    position: relative;
    border-radius: 8px;
    transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease;
    display: inline-block;
    border: 2px solid transparent;

    /* Hover effect */
    &:hover {
      background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
      color: white;
      border-color: white;
    }

    /* Gradient border */
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

const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem; /* ✅ Slightly smaller font */
  margin: 0; /* ✅ Completely removed margin */
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