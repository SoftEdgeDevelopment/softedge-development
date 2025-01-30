import React from "react";
import styled from "styled-components";
import backgroundImage from "../pages/assets/background.png"; // ✅ Correct path for background image

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
    filter: blur(20px) brightness(1.3) opacity(0.6); // ✅ Applies blur, brightness, and opacity
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

// Updated Title - Black font with white outline
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black; // ✅ Black font
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white; // ✅ White border effect
  margin-bottom: 1.5rem;
`;

// Updated Description - Text is white
const Description = styled.p`
  font-size: 1.125rem;
  color: white; // ✅ Changed to white
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Updated Content Wrapper - Glassmorphism effect applied
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px); // ✅ Soft frosted blur
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Updated Section Titles - Black font with a white outline
const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black; // ✅ Black font
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white; // ✅ White border effect
  margin-bottom: 1rem;
`;

// Updated Section Content - Text is white
const SectionContent = styled.p`
  font-size: 1rem;
  color: white; // ✅ Changed to white
  line-height: 1.7;
`;

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