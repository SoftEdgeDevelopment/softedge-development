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

// Wrapper for the donate content
const DonateWrapper = styled.div`
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

// Donation Button Styling
const DonateButton = styled.a`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  color: white;
  font-size: 1.2rem;
  padding: 15px 30px;
  border-radius: 8px;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color:#333;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid white;
  }

  &:focus {
    outline: none;
  }
`;

const Donate = () => {
  return (
    <>
      <BackgroundContainer />
      <DonateWrapper>
        <Title>Support SoftEdge Development</Title>
        <Description>
          Your generous donations help us build innovative, user-centric solutions that transform businesses. Join us in creating the future of technology.
        </Description>

        <ContentWrapper>
          <SectionTitle>How Your Donation Helps</SectionTitle>
          <SectionContent>
            Every donation goes directly towards improving our platform, expanding our features, and creating a better user experience. With your support, we can continue pushing the boundaries of innovation.
          </SectionContent>
          <SectionTitle>Donate Today</SectionTitle>
          <SectionContent>
            Every contribution, big or small, makes a significant impact. Thank you for being part of our mission to change the world through technology.
          </SectionContent>

{/* Link to GoFundMe */}
<DonateButton href="https://www.gofundme.com/f/help-softedge-build-a-better-social-network" target="_blank" rel="noopener noreferrer">
            Fundraiser
          </DonateButton>

          {/* Link to GoFundMe */}
          <DonateButton href="https://www.buymeacoffee.com/softedgedev" target="_blank" rel="noopener noreferrer">
          Join Us in Making a Difference, Make Your Mark
          </DonateButton>

          
        </ContentWrapper>
      </DonateWrapper>
    </>
  );
};

export default Donate;