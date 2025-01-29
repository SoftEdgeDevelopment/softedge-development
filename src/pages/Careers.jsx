import React from "react";
import styled from "styled-components";

const CareersWrapper = styled.div`
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

const Careers = () => {
  return (
    <CareersWrapper>
      <Title>Careers at SoftEdge Development</Title>
      <Description>
        Join SoftEdge Development and become a part of a team that drives innovation and creates impactful solutions for businesses worldwide.
      </Description>

      <ContentWrapper>
        <SectionTitle>We're Currently Not Hiring</SectionTitle>
        <SectionContent>
          At this time, we are not actively hiring. However, we are always looking for talented individuals who share our passion for innovation and excellence. Please check back later for updates on career opportunities with SoftEdge Development.
        </SectionContent>
        <SectionContent>
          Thank you for your interest in being part of our team!
        </SectionContent>
      </ContentWrapper>
    </CareersWrapper>
  );
};

export default Careers;