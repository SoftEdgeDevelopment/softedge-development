import React from 'react';
import styled from 'styled-components';

// Import images
import bdsImage1 from './assets/bds1.png';
import bdsImage2 from './assets/bds2.png';
import bdsImage3 from './assets/bds3.png';

// Wrapper for the Big Data and Data Science section
const BigDataWrapper = styled.div`
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

const BigDataAndDataScience = () => (
  <BigDataWrapper>
    <Title>Big Data & Data Science</Title>
    <Description>
      Unlock the power of your data with our Big Data and Data Science services. We provide analytics-driven insights to help you make informed 
      decisions and gain a competitive edge in your industry.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={bdsImage1} alt="Big Data Process 1" />
        <TextWrapper>
          <SectionHeader>Harnessing the Power of Big Data</SectionHeader>
          <SectionContent>
            Our Big Data solutions enable you to store, process, and analyze massive datasets. We help you uncover trends and insights that drive decision-making, ensuring that data works for you.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Right aligned image and left aligned text */}
      <Section justifyContent="flex-end">
        <TextWrapper>
          <SectionHeader>Predictive Analytics</SectionHeader>
          <SectionContent>
            Using advanced analytics and machine learning algorithms, we provide predictive insights that help you anticipate market changes and customer behavior, enhancing your strategy and outcomes.
          </SectionContent>
        </TextWrapper>
        <Image src={bdsImage2} alt="Big Data Process 2" />
      </Section>

      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={bdsImage3} alt="Big Data Process 3" />
        <TextWrapper>
          <SectionHeader>Data-Driven Decision Making</SectionHeader>
          <SectionContent>
            Empower your organization to make faster, data-driven decisions. Our solutions streamline data analysis and provide actionable insights that improve operational efficiency, reduce risks, and optimize performance.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>Big Data Transformation for Businesses</SectionHeader>
        <SectionContent>
          We assist businesses in transforming their data operations with cutting-edge technologies and best practices. From cloud data management to AI-driven analytics, we ensure that your data journey is seamless and impactful.
        </SectionContent>
      </div>
    </SectionWrapper>
  </BigDataWrapper>
);

export default BigDataAndDataScience;