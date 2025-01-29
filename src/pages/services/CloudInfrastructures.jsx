import React from 'react';
import styled from 'styled-components';

// Wrapper for the Cloud Infrastructures section
const CloudInfrastructuresWrapper = styled.div`
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

const CloudInfrastructures = () => (
  <CloudInfrastructuresWrapper>
    <Title>Cloud Infrastructures</Title>
    <Description>
      Build scalable, secure, and efficient cloud solutions with SoftEdge Development. We design cloud-native architectures tailored to your 
      business requirements, ensuring seamless performance and cost optimization.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_1.jpg" alt="Cloud Infrastructure 1" />
        <TextWrapper>
          <SectionHeader>Cloud-Native Architecture</SectionHeader>
          <SectionContent>
            We design cloud-native architectures that maximize performance and scalability. With modern microservices-based approaches, we ensure that your infrastructure can scale dynamically to meet demand.
          </SectionContent>
        </TextWrapper>
      </div>

      {/* Right aligned image and left aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", alignItems: "center" }}>
        <TextWrapper>
          <SectionHeader>Security & Compliance</SectionHeader>
          <SectionContent>
            Protect your data and infrastructure with our robust security protocols. We integrate top-tier security practices to ensure compliance with industry standards while keeping your cloud environment safe.
          </SectionContent>
        </TextWrapper>
        <Image src="path_to_image_2.jpg" alt="Cloud Infrastructure 2" />
      </div>

      {/* Left aligned image and right aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_3.jpg" alt="Cloud Infrastructure 3" />
        <TextWrapper>
          <SectionHeader>Cost Optimization</SectionHeader>
          <SectionContent>
            We help you optimize your cloud costs by leveraging efficient resource allocation and management. Our solutions ensure that you only pay for what you use, providing cost-effective scalability for your business.
          </SectionContent>
        </TextWrapper>
      </div>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>Cloud Transformation for Businesses</SectionHeader>
        <SectionContent>
          Our cloud transformation services help businesses migrate to the cloud smoothly and efficiently. We provide end-to-end cloud services, including strategy, migration, and optimization, ensuring your cloud infrastructure supports your growth and success.
        </SectionContent>
      </div>
    </SectionWrapper>
  </CloudInfrastructuresWrapper>
);

export default CloudInfrastructures;