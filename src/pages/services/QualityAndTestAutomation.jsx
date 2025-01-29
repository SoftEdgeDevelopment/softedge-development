import React from 'react';
import styled from 'styled-components';

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
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Image Styling
const Image = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

// Div for Overview Text and Headers
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
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
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_1.jpg" alt="Test Automation Process 1" />
        <TextWrapper>
          <SectionHeader>Automated Testing Frameworks</SectionHeader>
          <SectionContent>
            Implement automated testing frameworks like Selenium and Cypress to ensure fast and reliable test execution. We guide you to integrate automation 
            seamlessly into your development lifecycle, improving testing coverage and reducing time-to-market.
          </SectionContent>
        </TextWrapper>
      </div>

      {/* Right aligned image and left aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", alignItems: "center" }}>
        <TextWrapper>
          <SectionHeader>Comprehensive Test Coverage</SectionHeader>
          <SectionContent>
            Achieve comprehensive test coverage by automating functional, regression, and performance testing. We help you identify gaps and optimize the quality 
            of your applications, ensuring high reliability and performance at every stage of development.
          </SectionContent>
        </TextWrapper>
        <Image src="path_to_image_2.jpg" alt="Test Automation Process 2" />
      </div>

      {/* Left aligned image and right aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_3.jpg" alt="Test Automation Process 3" />
        <TextWrapper>
          <SectionHeader>Continuous Integration and Delivery</SectionHeader>
          <SectionContent>
            Enhance your CI/CD pipeline by incorporating automated testing. This ensures fast feedback for developers and improves product quality. We help you set 
            up automated tests that run with every build, ensuring issues are caught early.
          </SectionContent>
        </TextWrapper>
      </div>

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