import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images
import agileImage1 from "../services/assets/agile1.png";
import agileImage2 from "../services/assets/agile2.png";
import agileImage3 from "../services/assets/agile3.png";

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

// Wrapper for Agile Management content
const AgileWrapper = styled.div`
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

const AgileManagement = () => (
  <>
    <BackgroundContainer />
    <AgileWrapper>
      <Title>Agile Management</Title>
      <Description>
        Optimize your workflow and accelerate project delivery with Agile methodologies. 
        We guide teams through Agile transformations to improve collaboration, increase efficiency, 
        and deliver high-quality results with flexibility and speed.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={agileImage1} alt="Agile Frameworks" />
          <TextWrapper>
            <SectionHeader>Implementing Agile Frameworks</SectionHeader>
            <SectionContent>
              Master Agile frameworks like Scrum and Kanban to boost efficiency and 
              transparency. We help teams adopt structured sprints, stand-ups, and 
              iterative cycles to achieve greater productivity and faster outcomes.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Collaboration & Adaptability</SectionHeader>
            <SectionContent>
              Foster a culture of cross-functional collaboration and adaptability. 
              Agile empowers teams to respond swiftly to changing requirements, 
              eliminate bottlenecks, and deliver incremental improvements effectively.
            </SectionContent>
          </TextWrapper>
          <Image src={agileImage2} alt="Agile Collaboration" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={agileImage3} alt="Faster Time-to-Market" />
          <TextWrapper>
            <SectionHeader>Faster Time-to-Market</SectionHeader>
            <SectionContent>
              Deliver products faster and reduce risk with Agile. By continuously 
              refining processes and incorporating real-time feedback, Agile ensures 
              high-quality releases while maintaining speed and flexibility.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Agile Transformation for Business Growth</SectionHeader>
          <SectionContent>
            Transitioning to Agile unlocks growth opportunities by enhancing 
            operational efficiency. Our Agile consulting services help organizations 
            integrate Agile seamlessly, ensuring sustainable success in a dynamic market.
          </SectionContent>
        </div>
      </SectionWrapper>
    </AgileWrapper>
  </>
);

export default AgileManagement;