import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images
import qaImage1 from "../services/assets/qa1.png";
import qaImage2 from "../services/assets/qa2.png";
import qaImage3 from "../services/assets/qa3.png";

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

// Wrapper for Quality & Test Automation content
const QAWrapper = styled.div`
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

const QualityAndTestAutomation = () => (
  <>
    <BackgroundContainer />
    <QAWrapper>
      <Title>Quality & Test Automation</Title>
      <Description>
        Ensure software reliability and efficiency with robust automated testing frameworks. 
        Our expertise in QA and test automation guarantees high-performance applications that meet industry standards.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={qaImage1} alt="Automated Testing Frameworks" />
          <TextWrapper>
            <SectionHeader>Automated Testing Frameworks</SectionHeader>
            <SectionContent>
              Implement advanced test automation frameworks such as Selenium, Cypress, and Playwright 
              to accelerate software delivery. Our automation strategies enhance test execution speed, 
              reduce human errors, and ensure scalability.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Comprehensive Test Coverage</SectionHeader>
            <SectionContent>
              Achieve end-to-end test coverage by integrating functional, regression, and 
              performance testing. Our expertise in test automation ensures seamless 
              execution and higher confidence in software releases.
            </SectionContent>
          </TextWrapper>
          <Image src={qaImage2} alt="Comprehensive Test Coverage" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={qaImage3} alt="CI/CD Testing Automation" />
          <TextWrapper>
            <SectionHeader>Continuous Integration & Delivery</SectionHeader>
            <SectionContent>
              Optimize your CI/CD pipeline with integrated test automation. By automating 
              quality checks at every stage, we help teams deliver faster, minimize defects, 
              and enhance overall software reliability.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Driving Business Growth with Test Automation</SectionHeader>
          <SectionContent>
            A strong QA strategy leads to better software, satisfied users, and increased 
            business efficiency. We empower teams with cutting-edge test automation 
            solutions to ensure seamless, high-quality digital experiences.
          </SectionContent>
        </div>
      </SectionWrapper>
    </QAWrapper>
  </>
);

export default QualityAndTestAutomation;