import React from 'react';
import styled from 'styled-components';

// Import images
import agileImage1 from './assets/agile1.png';
import agileImage2 from './assets/agile2.png';
import agileImage3 from './assets/agile3.png';

// Wrapper for the Agile Management section
const AgileManagementWrapper = styled.div`
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

// Styled component for each section
const Section = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AgileManagement = () => (
  <AgileManagementWrapper>
    <Title>Agile Management</Title>
    <Description>
      Streamline your workflows with Agile methodologies. Our experts guide you to implement Agile practices that promote collaboration, 
      efficiency, and adaptability for faster and more effective project delivery. By breaking down complex tasks into manageable parts,
      we ensure continuous improvement and success.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={agileImage1} alt="Agile Process 1" />
        <TextWrapper>
          <SectionHeader>Implementing Agile Frameworks</SectionHeader>
          <SectionContent>
            Learn how Agile frameworks, such as Scrum and Kanban, enable your team to work iteratively and efficiently. We introduce you to proven strategies 
            that improve productivity, transparency, and communication across your entire team.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Right aligned image and left aligned text */}
      <Section justifyContent="flex-end">
        <TextWrapper>
          <SectionHeader>Collaboration & Efficiency</SectionHeader>
          <SectionContent>
            Discover the power of Agile collaboration, where cross-functional teams share a common goal. We ensure your team can adapt quickly to changes,
            eliminating bottlenecks and increasing overall efficiency. 
          </SectionContent>
        </TextWrapper>
        <Image src={agileImage2} alt="Agile Process 2" />
      </Section>

      {/* Left aligned image and right aligned text */}
      <Section justifyContent="flex-start">
        <Image src={agileImage3} alt="Agile Process 3" />
        <TextWrapper>
          <SectionHeader>Faster Time-to-Market</SectionHeader>
          <SectionContent>
            Agile methodologies deliver faster results through iterative releases. We show you how to get quick feedback, allowing you to adjust and deliver 
            high-quality products at a faster pace. With Agile, your products can reach the market sooner, ensuring competitive advantage.
          </SectionContent>
        </TextWrapper>
      </Section>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>Agile Transformation for Businesses</SectionHeader>
        <SectionContent>
          Agile transformation helps businesses shift from traditional project management approaches to flexible, adaptive methods. Our Agile coaching and
          consulting services equip your team with the skills and tools needed to thrive in a rapidly changing market.
        </SectionContent>
      </div>
    </SectionWrapper>
  </AgileManagementWrapper>
);

export default AgileManagement;