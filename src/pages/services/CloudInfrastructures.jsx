import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images
import cloudImage1 from "../services/assets/cloud1.png";
import cloudImage2 from "../services/assets/cloud2.png";
import cloudImage3 from "../services/assets/cloud3.png";

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

// Wrapper for Cloud Infrastructure content
const CloudWrapper = styled.div`
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

const CloudInfrastructures = () => (
  <>
    <BackgroundContainer />
    <CloudWrapper>
      <Title>Cloud Infrastructures</Title>
      <Description>
        Build scalable, secure, and efficient cloud solutions with SoftEdge Development. 
        We design cloud-native architectures tailored to your business needs, ensuring seamless 
        performance and cost optimization.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={cloudImage1} alt="Cloud-Native Architecture" />
          <TextWrapper>
            <SectionHeader>Cloud-Native Architecture</SectionHeader>
            <SectionContent>
              We specialize in designing cloud-native infrastructures optimized for flexibility 
              and scalability. By leveraging microservices and serverless technologies, we enable 
              businesses to efficiently scale their operations while minimizing costs.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Security & Compliance</SectionHeader>
            <SectionContent>
              Our cloud solutions prioritize security, implementing advanced encryption, 
              access control, and compliance standards such as GDPR and HIPAA. We ensure your 
              cloud environment is protected against evolving cyber threats.
            </SectionContent>
          </TextWrapper>
          <Image src={cloudImage2} alt="Cloud Security & Compliance" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={cloudImage3} alt="Cloud Cost Optimization" />
          <TextWrapper>
            <SectionHeader>Cost Optimization</SectionHeader>
            <SectionContent>
              Reduce cloud expenses while maintaining high performance. Our cost optimization 
              strategies ensure efficient resource allocation, autoscaling capabilities, and 
              pay-as-you-go pricing models, preventing unnecessary infrastructure expenses.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Cloud Transformation for Businesses</SectionHeader>
          <SectionContent>
            Our cloud transformation services guide businesses in migrating to the cloud seamlessly. 
            We handle everything from strategy to implementation, ensuring your cloud infrastructure 
            aligns with your growth objectives and delivers optimal efficiency.
          </SectionContent>
        </div>
      </SectionWrapper>
    </CloudWrapper>
  </>
);

export default CloudInfrastructures;