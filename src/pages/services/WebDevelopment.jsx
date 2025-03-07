import React from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image

// Import images (Keeping Original Names)
import cloudImage1 from "./assets/cloud1.png";
import cloudImage2 from "./assets/cloud2.png";
import cloudImage3 from "./assets/cloud3.png";

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

// Wrapper for Web Development content
const WebWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
`;

// Title Styling
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;
`;

// Description Styling
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

// Image Styling
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

// Subheading Styling
const SectionHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  margin-bottom: 1rem;
  text-align: center;
`;

// Content Styling
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

const WebDevelopment = () => (
  <>
    <BackgroundContainer />
    <WebWrapper>
      <Title>Web Development</Title>
      <Description>
        Build fast, scalable, and modern web applications with **SoftEdge Development**.
        Our team crafts **responsive, secure, and high-performance** websites that elevate your business presence.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={cloudImage1} alt="Frontend Development" />
          <TextWrapper>
            <SectionHeader>Frontend Development</SectionHeader>
            <SectionContent>
              We create **pixel-perfect, highly interactive** UI/UX designs using **React.js, Vue.js, and Next.js**.
              With modern frameworks like **Tailwind CSS and Bootstrap**, we ensure stunning and **responsive interfaces**.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Backend & API Development</SectionHeader>
            <SectionContent>
              Our **backend services** leverage **Node.js, Express.js, and GraphQL** to create **scalable APIs**.
              We integrate databases like **PostgreSQL and MongoDB**, ensuring fast and **secure data management**.
            </SectionContent>
          </TextWrapper>
          <Image src={cloudImage2} alt="Backend Development" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={cloudImage3} alt="Performance & Security" />
          <TextWrapper>
            <SectionHeader>Performance & Security</SectionHeader>
            <SectionContent>
              Every web application we build is **optimized for speed and security**.
              We implement **SEO best practices, performance enhancements, and security measures** to **keep your site fast and safe**.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>Scalable Web Solutions for Businesses</SectionHeader>
          <SectionContent>
            Whether you need an **eCommerce store, SaaS platform, or a corporate website**, our development process
            ensures a **scalable, secure, and future-ready solution** that grows with your business.
          </SectionContent>
        </div>
      </SectionWrapper>
    </WebWrapper>
  </>
);

export default WebDevelopment;