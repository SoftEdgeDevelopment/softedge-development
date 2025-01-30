import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../pages/assets/background.png"; // ✅ Correct path for background image

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
    filter: blur(20px) brightness(1.3) opacity(0.6); // ✅ Matches project styling
  }
`;

// Wrapper for the Contact page
const ContactWrapper = styled.div`
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
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;
`;

// Updated Description - Text is white
const Description = styled.p`
  font-size: 1.125rem;
  color: white;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Button group container
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

// Styled buttons
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

// Updated Content Wrapper - Removed unwanted gradient border
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

// Updated Section Titles - Black font with a white outline
const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  margin-bottom: 1rem;
`;

// Updated Section Content - Text is white
const SectionContent = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.7;
`;

// Form field container
const FormField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

// Label styling
const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  display: block;
  margin-bottom: 0.5rem;
`;

// Input and TextArea styling
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

// Submit button wrapper
const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

// Submit button styling
const SubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 1rem;
  background: white;
  color: #4c1d95;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    border-color: white;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [selectedSection, setSelectedSection] = useState("generalInquiries");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "generalInquiries":
        return (
          <>
            <SectionTitle>General Inquiries</SectionTitle>
            <SectionContent>
              Have a question about our services, company, or partnership opportunities? We’re here to provide you with the information you need. 
              Whether you are looking to collaborate, need details on our digital solutions, or have any general inquiries, our team is ready to assist. 
              Reach out to us, and we will respond promptly with the answers you seek.
            </SectionContent>
          </>
        );
      case "support":
        return (
          <>
            <SectionTitle>Customer & Technical Support</SectionTitle>
            <SectionContent>
              Experiencing technical issues or need assistance with our services? Our dedicated support team is here to ensure a seamless experience for you. 
              We provide timely troubleshooting, guidance on service-related concerns, and personalized support tailored to your needs. 
              Contact us today for prompt assistance and solutions.
            </SectionContent>
          </>
        );
      case "careers":
        return (
          <>
            <SectionTitle>Join Our Team – Careers at SoftEdge Development</SectionTitle>
            <SectionContent>
              At SoftEdge Development, we are always looking for innovative and passionate professionals who thrive in a fast-paced, technology-driven environment. 
              If you are seeking career growth in software development, digital transformation, or cloud technologies, we’d love to hear from you. 
              Explore exciting career opportunities, contribute to impactful projects, and grow alongside a team of talented individuals. 
              Contact us to learn more about how you can be part of our dynamic and forward-thinking organization.
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
      <ContactWrapper>
        <Title>Contact Us</Title>
        <Description>
          Whether you have a general inquiry, need support, or are exploring career opportunities, we’re here to help.
        </Description>

        <ButtonGroup>
          <Button onClick={() => setSelectedSection("support")}>Support</Button>
          <Button onClick={() => setSelectedSection("generalInquiries")}>General Inquiries</Button>
          <Button onClick={() => setSelectedSection("careers")}>Careers</Button>
        </ButtonGroup>

        <ContentWrapper>{renderContent()}</ContentWrapper>

        <ContentWrapper>
        <SectionTitle>Contact Form</SectionTitle>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label>Name</Label>
              <Input type="text" name="lastName" onChange={handleChange} placeholder="Enter your name" required />
            </FormField>

            <FormField>
              <Label>Email</Label>
              <Input type="email" name="email" onChange={handleChange} placeholder="Enter your email" required />
            </FormField>

            <FormField>
              <Label>Message</Label>
              <TextArea name="message" onChange={handleChange} placeholder="Enter your message" required />
            </FormField>

            <SubmitButtonWrapper>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </SubmitButtonWrapper>
          </form>
        </ContentWrapper>
      </ContactWrapper>
    </>
  );
};

export default Contact;