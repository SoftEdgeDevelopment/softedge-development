import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images
import bdsImage1 from "../services/assets/bds1.png";
import bdsImage2 from "../services/assets/bds2.png";
import bdsImage3 from "../services/assets/bds3.png";

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
    filter: blur(20px) brightness(1.3) opacity(0.6);
  }
`;

// Wrapper for the Big Data & Data Science section
const BigDataWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
`;

// Title Styling - Black font with white outline
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;
`;

// Description Styling - White text
const Description = styled.p`
  font-size: 1.125rem;
  color: white;
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

// Subheading Styling - Black font with white outline
const SectionHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  margin-bottom: 1rem;
  text-align: center;
`;

// Content Styling - White text
const SectionContent = styled.p`
  font-size: 1.125rem;
  color: white;
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

const BigDataAndDataScience = () => (
  <>
    <BackgroundContainer />
    <BigDataWrapper>
      <Title>Big Data & Data Science</Title>
      <Description>
        Leverage the power of data to make smarter business decisions. Our Big Data and 
        Data Science solutions provide analytics-driven insights, helping organizations 
        unlock growth opportunities and gain a competitive edge.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={bdsImage1} alt="Big Data Processing" />
          <TextWrapper>
            <SectionHeader>Harnessing the Power of Big Data</SectionHeader>
            <SectionContent>
              Our Big Data solutions enable organizations to process and analyze massive 
              datasets in real-time. We provide scalable data architectures that support 
              efficient data processing, uncovering insights that drive informed decisions.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Predictive Analytics</SectionHeader>
            <SectionContent>
              Utilizing machine learning and advanced analytics, we help businesses anticipate 
              trends, optimize operations, and enhance customer engagement. Our predictive 
              models empower companies to stay ahead of the competition.
            </SectionContent>
          </TextWrapper>
          <Image src={bdsImage2} alt="Predictive Analytics" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={bdsImage3} alt="Data-Driven Decision Making" />
          <TextWrapper>
            <SectionHeader>Data-Driven Decision Making</SectionHeader>
            <SectionContent>
              Transform your business operations with data-driven decision-making. We integrate 
              data analytics tools and automation to help businesses optimize performance, 
              reduce risks, and streamline processes efficiently.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Big Data for Business Growth</SectionHeader>
          <SectionContent>
            Unlock new possibilities with Big Data and Data Science. We help businesses leverage 
            AI-driven analytics, cloud data management, and automation to transform data into 
            actionable strategies that drive success.
          </SectionContent>
        </div>
      </SectionWrapper>
    </BigDataWrapper>
  </>
);

export default BigDataAndDataScience;