import "react";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image

// Full-page background container
const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; // Puts background behind everything
  display: flex;
  justify-content: center;
  align-items: center;

  /* Background Image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center/cover;
    filter: blur(20px) brightness(1.2) grayscale(100%) opacity(0.6); // ✅ Converted to grayscale
  }
`;

// Wrapper for the careers content
const CareersWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1; // Ensures content is above the background
`;

// Title
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

// Description
const Description = styled.p`
  font-size: 1.125rem;
  color: white;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;

// Updated Content Wrapper - Glassmorphism effect applied
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Section Titles - Black font with a white outline
const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  margin-bottom: 1rem;
`;

// Section Content - White text for contrast
const SectionContent = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.7;
`;

// Careers Page Component
const Careers = () => {
  return (
    <>
      <BackgroundContainer />
      <CareersWrapper>
        <Title>Careers at SoftEdge Development</Title>
        <Description>
          Join SoftEdge Development and become a part of a team that drives innovation and creates impactful solutions for businesses worldwide.
        </Description>

        <ContentWrapper>
          <SectionTitle>We're Currently Not Hiring</SectionTitle>
          <SectionContent>
            At this time, we are not actively hiring. However, we are always looking for talented individuals who share our passion for innovation and excellence. Please check back later for updates on career opportunities with SoftEdge Development.
          </SectionContent>
          <SectionContent>
            Thank you for your interest in being part of our team!
          </SectionContent>
        </ContentWrapper>
      </CareersWrapper>
    </>
  );
};

export default Careers;