import React from 'react';
import styled from 'styled-components';

// Import images
import dsImage1 from './assets/ds1.png';
import dsImage2 from './assets/ds2.png';
import dsImage3 from './assets/ds3.png';

// Wrapper for the Digital Strategy section
const DigitalStrategyWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

// Title Styling (consistent with other sections)
const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

// Description Styling (consistent with other sections)
const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
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

// Image Styling
const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%; // This ensures images take up the full width on smaller screens
  }
`;

// Div for Overview Text and Headers
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;  // Allow this container to grow and fill space
  max-width: 100%;
`;

// Header for each text section
const SectionHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.03rem;
`;

// Content for each text section
const SectionContent = styled.p`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Styled component for each section that controls alignment
const Section = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  gap: 2rem;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DigitalStrategy = () => (
  <DigitalStrategyWrapper>
    <Title>Digital Strategy</Title>
    <Description>
      At SoftEdge Development, we specialize in crafting tailored digital strategies that empower businesses to thrive in today's dynamic market.
      From digital transformation to innovative solutions, we help you achieve your business goals.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={dsImage1} alt="Digital Strategy 1" />
        <TextWrapper>
          <SectionHeader>Transforming Your Business Digitally</SectionHeader>
          <SectionContent>
            We help businesses transform by leveraging the latest technologies. Our tailored digital strategies ensure your business stays ahead by adopting modern solutions that align with your long-term vision.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Right aligned image and left aligned text */}
      <Section justifyContent="flex-end">
        <TextWrapper>
          <SectionHeader>Innovative Solutions for Growth</SectionHeader>
          <SectionContent>
            We provide innovative digital solutions that accelerate business growth. Our approach focuses on optimizing existing processes and introducing new strategies to drive efficiency, productivity, and scalability.
          </SectionContent>
        </TextWrapper>
        <Image src={dsImage2} alt="Digital Strategy 2" />
      </Section>

      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={dsImage3} alt="Digital Strategy 3" />
        <TextWrapper>
          <SectionHeader>Achieving Long-Term Success</SectionHeader>
          <SectionContent>
            Our digital strategies are designed for long-term success. By focusing on continuous innovation and strategic foresight, we ensure your business can adapt to market changes and consistently deliver value.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>Comprehensive Digital Strategy for Your Business</SectionHeader>
        <SectionContent>
          A comprehensive digital strategy is key to long-term business success. Our approach combines digital transformation, data-driven insights, and innovative technologies to deliver strategies that meet your unique business needs.
        </SectionContent>
      </div>
    </SectionWrapper>
  </DigitalStrategyWrapper>
);

export default DigitalStrategy;