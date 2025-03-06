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
    filter: blur(20px) brightness(1.2) grayscale(100%) opacity(0.6); // ✅ Converted to grayscale
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

// Title
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;
`;

// Description
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
  color: black;
  border: 2px solid;
  border-image: linear-gradient(90deg, black, grey, white) 1; // ✅ Changed to grayscale gradient
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, black, grey, white);
    color: white;
    border-color: white;
  }
`;

// Updated Content Wrapper
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

// Section Titles
const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  margin-bottom: 1rem;
`;

// Section Content
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

// Submit button styling
const SubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 1rem;
  background: white;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid;
  border-image: linear-gradient(90deg, black, grey, white) 1; // ✅ Changed to grayscale gradient
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(90deg, black, grey, white);
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
              Have a question about our services, company, or partnership opportunities? We’re here to provide the information you need.
            </SectionContent>
          </>
        );
      case "support":
        return (
          <>
            <SectionTitle>Customer & Technical Support</SectionTitle>
            <SectionContent>
              Experiencing technical issues? Our dedicated support team is ready to assist with troubleshooting and service concerns.
            </SectionContent>
          </>
        );
      case "careers":
        return (
          <>
            <SectionTitle>Join Our Team</SectionTitle>
            <SectionContent>
              Looking for a career in software development? Check back for opportunities to be part of SoftEdge Development.
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
        <Description>Whether it's support, general inquiries, or career opportunities, we're here to help.</Description>

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
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </ContentWrapper>
      </ContactWrapper>
    </>
  );
};

export default Contact;