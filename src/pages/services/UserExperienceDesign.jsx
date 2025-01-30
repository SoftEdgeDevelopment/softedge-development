import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

// Import images - Keeping the exact file paths as provided
import uxImage1 from "../services/assets/ux1.png";
import uxImage2 from "../services/assets/ux2.png";
import uxImage3 from "../services/assets/ux3.png";

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

// Wrapper for the User Experience Design section
const UXWrapper = styled.div`
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

const UserExperienceDesign = () => (
  <>
    <BackgroundContainer />
    <UXWrapper>
      <Title>User Experience Design</Title>
      <Description>
        Elevate your digital presence with intuitive, user-friendly designs that enhance engagement and customer satisfaction. 
        Our UX experts craft seamless experiences that drive business success.
      </Description>

      <SectionWrapper>
        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={uxImage1} alt="User-Centered Design" />
          <TextWrapper>
            <SectionHeader>User-Centered Design</SectionHeader>
            <SectionContent>
              Our UX design process prioritizes the needs, behaviors, and pain points of users. We create intuitive, 
              seamless designs that enhance user engagement, build trust, and drive brand loyalty.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Right aligned image and left aligned text */}
        <Section justifyContent="flex-end">
          <TextWrapper>
            <SectionHeader>Responsive & Adaptive Design</SectionHeader>
            <SectionContent>
              Our designs are fully responsive, ensuring a flawless user experience across all devices. Whether it's a 
              desktop, tablet, or mobile device, we implement adaptive design principles that provide a smooth 
              and consistent interface.
            </SectionContent>
          </TextWrapper>
          <Image src={uxImage2} alt="Responsive UX Design" />
        </Section>

        {/* Left aligned image and right aligned text */}
        <Section justifyContent="flex-start">
          <Image src={uxImage3} alt="Iterative Testing UX" />
          <TextWrapper>
            <SectionHeader>Iterative Testing & Feedback</SectionHeader>
            <SectionContent>
              We follow an iterative testing approach, gathering user feedback throughout the design process. 
              This ensures continuous improvement, eliminating friction points and refining the experience 
              for optimal usability.
            </SectionContent>
          </TextWrapper>
        </Section>

        {/* Additional Section for Business Impact */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <SectionHeader>UX Design for Business Growth</SectionHeader>
          <SectionContent>
            A great user experience translates to increased conversions, customer satisfaction, and long-term 
            business success. Our UX strategies help businesses create digital products that captivate users 
            and deliver measurable results.
          </SectionContent>
        </div>
      </SectionWrapper>
    </UXWrapper>
  </>
);

export default UserExperienceDesign;