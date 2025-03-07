import  { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image

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
    filter: blur(20px) brightness(1.2) grayscale(100%) opacity(0.6); // ✅ Converted to grayscale
  }
`;

// Wrapper for the page content
const AboutWrapper = styled.div`
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
  color: white; // ✅ White text
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: 2px solid;
  border-image: linear-gradient(90deg, black, grey, white) 1; // ✅ Changed to black, grey, and white gradient
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, black, grey, white);
    color: white;
  }
`;

// Updated Content Wrapper - Converted to grayscale styling
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px); // ✅ Soft frosted blur
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
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

const About = () => {
  const [selectedSection, setSelectedSection] = useState("mission");

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "mission":
        return (
          <>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionContent>
              At SoftEdge Development, our mission is to drive transformative change by delivering 
              cutting-edge digital solutions. We strive to empower businesses with scalable, sustainable, 
              and innovative technologies tailored to their unique goals.
            </SectionContent>
          </>
        );
      case "vision":
        return (
          <>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionContent>
              We aim to become a global leader in digital transformation, driving meaningful change 
              through technology. By fostering creativity, collaboration, and continuous learning, 
              SoftEdge Development envisions a future where businesses thrive seamlessly in the digital age.
            </SectionContent>
          </>
        );
      case "whyUs":
        return (
          <>
            <SectionTitle>Why Choose Us</SectionTitle>
            <SectionContent>
              SoftEdge Development offers unparalleled expertise in agile methodologies, cloud infrastructures, 
              and big data solutions. Our customer-first approach, commitment to excellence, and cutting-edge 
              technology ensure that we deliver transformative solutions that exceed expectations.
            </SectionContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <BackgroundContainer />
      <AboutWrapper>
        <Title>About SoftEdge Development</Title>
        <Description>
          SoftEdge Development specializes in crafting innovative digital solutions that help businesses stay ahead 
          in an ever-evolving technological landscape. From agile management to big data solutions, we are your trusted 
          partner in driving growth and innovation.
        </Description>

        <ButtonGroup>
          <Button onClick={() => handleClick("mission")}>Our Mission</Button>
          <Button onClick={() => handleClick("vision")}>Our Vision</Button>
          <Button onClick={() => handleClick("whyUs")}>Why Choose Us</Button>
        </ButtonGroup>

        <ContentWrapper>{renderContent()}</ContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;