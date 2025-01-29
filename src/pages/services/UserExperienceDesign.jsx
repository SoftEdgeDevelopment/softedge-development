import React from 'react';
import styled from 'styled-components';

// Wrapper for the User Experience Design section
const UserExperienceDesignWrapper = styled.div`
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

const UserExperienceDesign = () => (
  <UserExperienceDesignWrapper>
    <Title>User Experience Design</Title>
    <Description>
      Craft intuitive, user-friendly designs that enhance customer satisfaction and engagement. Our design experts focus on delivering 
      experiences that resonate with your users.
    </Description>

    {/* Section with images and text */}
    <SectionWrapper>
      {/* Left aligned image and right aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_1.jpg" alt="UX Design Process 1" />
        <TextWrapper>
          <SectionHeader>User-Centered Design</SectionHeader>
          <SectionContent>
            Our UX design process is centered around understanding the user's needs, behaviors, and pain points. We help you create intuitive, seamless designs that offer an engaging user experience and foster brand loyalty.
          </SectionContent>
        </TextWrapper>
      </div>

      {/* Right aligned image and left aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", alignItems: "center" }}>
        <TextWrapper>
          <SectionHeader>Responsive & Adaptive Design</SectionHeader>
          <SectionContent>
            We ensure that your designs are fully responsive, providing a great experience across all devices. Our adaptive design principles make sure that the user experience is tailored to different screen sizes and resolutions.
          </SectionContent>
        </TextWrapper>
        <Image src="path_to_image_2.jpg" alt="UX Design Process 2" />
      </div>

      {/* Left aligned image and right aligned text */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", alignItems: "center" }}>
        <Image src="path_to_image_3.jpg" alt="UX Design Process 3" />
        <TextWrapper>
          <SectionHeader>Iterative Testing & Feedback</SectionHeader>
          <SectionContent>
            We implement user testing throughout the design process, allowing us to gather feedback and refine the design iteratively. This ensures that the end product meets user expectations and business goals.
          </SectionContent>
        </TextWrapper>
      </div>

      {/* Additional Section for SEO Enhancement */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <SectionHeader>UX Design for Business Success</SectionHeader>
        <SectionContent>
          Effective user experience design is essential for business success. We help businesses create digital products that delight users and drive measurable results, including higher engagement, conversion rates, and customer satisfaction.
        </SectionContent>
      </div>
    </SectionWrapper>
  </UserExperienceDesignWrapper>
);

export default UserExperienceDesign;