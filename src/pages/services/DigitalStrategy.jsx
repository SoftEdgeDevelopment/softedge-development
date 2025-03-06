import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images
import dsImage1 from "../services/assets/ds1.png";
import dsImage2 from "../services/assets/ds2.png";
import dsImage3 from "../services/assets/ds3.png";

// Full-page background container
const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
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
    filter: blur(20px) brightness(1.2) opacity(0.6);
  }
`;

// Wrapper for Digital Strategy content
const DigitalStrategyWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
`;

// Title Styling - White font with black outline
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black; /* ✅ Change text color to black */
text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white; /* ✅ Change outline to white */
  margin-bottom: 1.5rem;
`;

// Description Styling - Light grey text
const Description = styled.p`
  font-size: 1.125rem;
  color: lightgrey;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Section Wrapper for Images and Text
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
`;

// Image Styling - Grayscale border effect
const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  border: 3px solid transparent;
  background: linear-gradient(90deg, black, grey, white);
  padding: 3px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Wrapper for Text Sections
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
`;

// Subheading Styling - White font with black outline
const SectionHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  margin-bottom: 1rem;
  text-align: center;
`;

// Content Styling - Light grey text
const SectionContent = styled.p`
  font-size: 1.125rem;
  color: lightgrey;
  line-height: 1.7;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Section Layout
const Section = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DigitalStrategy = () => (
  <>
    <BackgroundContainer />
    <DigitalStrategyWrapper>
      <Title>Digital Strategy</Title>
      <Description>
        Empower your business with tailored digital strategies that drive growth, innovation, and 
        long-term success. We specialize in modern solutions that help businesses thrive in a 
        rapidly evolving digital landscape.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={dsImage1} alt="Digital Transformation" />
          <TextWrapper>
            <SectionHeader>Transforming Your Business Digitally</SectionHeader>
            <SectionContent>
              Digital transformation is the key to staying competitive. We implement strategies 
              that integrate cutting-edge technology, streamline operations, and enhance customer 
              engagement for sustainable business growth.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Innovative Solutions for Growth</SectionHeader>
            <SectionContent>
              Our data-driven approach to digital strategy enables businesses to adapt to market 
              trends. From AI-driven automation to cloud-based solutions, we help you unlock 
              new opportunities for growth and efficiency.
            </SectionContent>
          </TextWrapper>
          <Image src={dsImage2} alt="Innovative Digital Solutions" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={dsImage3} alt="Strategic Business Success" />
          <TextWrapper>
            <SectionHeader>Achieving Long-Term Success</SectionHeader>
            <SectionContent>
              Our digital strategies focus on long-term value creation. By leveraging 
              advanced analytics, market insights, and emerging technologies, we help 
              businesses build scalable, future-ready models that stand the test of time.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Comprehensive Digital Strategy for Business Growth</SectionHeader>
          <SectionContent>
            A strong digital strategy drives efficiency, profitability, and innovation. We partner with businesses 
            to create tailored solutions that align with their vision, ensuring long-term success in the 
            ever-changing digital world.
          </SectionContent>
        </div>
      </SectionWrapper>
    </DigitalStrategyWrapper>
  </>
);

export default DigitalStrategy;