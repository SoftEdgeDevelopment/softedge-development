import React, { useState } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
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
  color: #4c1d95;
  border: 2px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    border-color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #666;
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
              At SoftEdge Development, our mission is to drive transformative change by delivering cutting-edge digital solutions. We strive to empower businesses with scalable, sustainable, and innovative technologies tailored to their unique goals.
            </SectionContent>
          </>
        );
      case "vision":
        return (
          <>
            <SectionTitle>Our Vision</SectionTitle>
            <SectionContent>
              We aim to become a global leader in digital transformation, driving meaningful change through technology. By fostering creativity, collaboration, and continuous learning, SoftEdge Development envisions a future where businesses thrive seamlessly in the digital age.
            </SectionContent>
          </>
        );
      case "whyUs":
        return (
          <>
            <SectionTitle>Why Choose Us</SectionTitle>
            <SectionContent>
              SoftEdge Development offers unparalleled expertise in agile methodologies, cloud infrastructures, and big data solutions. Our customer-first approach, commitment to excellence, and cutting-edge technology ensure that we deliver transformative solutions that exceed expectations.
            </SectionContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <AboutWrapper>
      <Title>About SoftEdge Development</Title>
      <Description>
        SoftEdge Development specializes in crafting innovative digital solutions that help businesses stay ahead in an ever-evolving technological landscape. From agile management to big data solutions, we are your trusted partner in driving growth and innovation.
      </Description>

      <ButtonGroup>
        <Button onClick={() => handleClick("mission")}>Our Mission</Button>
        <Button onClick={() => handleClick("vision")}>Our Vision</Button>
        <Button onClick={() => handleClick("whyUs")}>Why Choose Us</Button>
      </ButtonGroup>

      <ContentWrapper>{renderContent()}</ContentWrapper>
    </AboutWrapper>
  );
};

export default About;