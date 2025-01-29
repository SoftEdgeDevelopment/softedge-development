import React from 'react';
import styled from 'styled-components';

// Import images
import qaImage1 from './assets/qa1.png';
import qaImage2 from './assets/qa2.png';
import qaImage3 from './assets/qa3.png';

// Wrapper for the Quality and Test Automation section
const QualityAndTestAutomationWrapper = styled.div`
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

const QualityAndTestAutomation = () => (
  <QualityAndTestAutomationWrapper>
    <Title>Quality & Test Automation</Title>
    <Description>
      Ensure reliability and performance with robust testing frameworks and automation tools. Our expertise in quality assurance helps you 
      deliver software that meets the highest standards.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={qaImage1} alt="Test Automation Process 1" />
        <TextWrapper>
          <SectionHeader>Automated Testing Frameworks</SectionHeader>
          <SectionContent>
            Implement automated testing frameworks like Selenium and Cypress to ensure fast and reliable test execution. We guide you to integrate automation 
            seamlessly into your development lifecycle, improving testing coverage and reducing time-to-market.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Right aligned image and left aligned text */}
      <Section justifyContent="flex-end">
        <TextWrapper>
          <SectionHeader>Comprehensive Test Coverage</SectionHeader>
          <SectionContent>
            Achieve comprehensive test coverage by automating functional, regression, and performance testing. We help you identify gaps and optimize the quality 
            of your applications, ensuring high reliability and performance at every stage of development.
          </SectionContent>
        </TextWrapper>
        <Image src={qaImage2} alt="Test Automation Process 2" />
      </Section>

      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={qaImage3} alt="Test Automation Process 3" />
        <TextWrapper>
          <SectionHeader>Continuous Integration and Delivery</SectionHeader>
          <SectionContent>
            Enhance your CI/CD pipeline by incorporating automated testing. This ensures fast feedback for developers and improves product quality. We help you set 
            up automated tests that run with every build, ensuring issues are caught early.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>Optimizing Software Quality with Automation</SectionHeader>
        <SectionContent>
          We empower your team with test automation tools and best practices to ensure that your software delivers excellent quality at scale. From test design to execution, 
          we provide end-to-end test automation services that guarantee optimal performance and reliability.
        </SectionContent>
      </div>
    </SectionWrapper>
  </QualityAndTestAutomationWrapper>
);

export default QualityAndTestAutomation;