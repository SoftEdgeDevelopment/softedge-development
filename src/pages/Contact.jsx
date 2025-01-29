import React, { useState } from "react";
import styled from "styled-components";

// Wrapper for the Contact page
const ContactWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

// Title styling
const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

// Description styling
const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
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

// Uniform button styling with hover effects (consistent with About page buttons)
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

// Form container - Full width but centered
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

// Section title and content for dynamic rendering
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

// Form field container (for proper spacing & full width inputs)
const FormField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

// Label styling
const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 0.5rem;
`;

// Input and TextArea styling - Wider width inside the form with min-width
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box; // Ensure padding doesn't affect width
  min-width: 600px; // Ensure the input fields are wider

  @media (max-width: 768px) {
    min-width: 100%; // Allow fields to shrink on smaller screens
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  box-sizing: border-box; // Ensure padding doesn't affect width
  min-width: 600px; // Ensure the text area is wider

  @media (max-width: 768px) {
    min-width: 100%; // Allow text area to shrink on smaller screens
  }
`;

// Submit button with border gradient by default, gradient background on hover
const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem; // Add margin to separate from the Message field
`;

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

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.lastName || !formData.email || !formData.telephone || !formData.message) {
      alert("All fields are required.");
      return;
    }

    const mailtoLink = `mailto:contact@softedgedevelopment.com
      ?subject=New Contact Inquiry from ${formData.lastName}
      &body=Name: ${formData.lastName}%0A
      Email: ${formData.email}%0A
      Telephone: ${formData.telephone}%0A
      Message: ${formData.message}`;

    window.location.href = mailtoLink;

    // Clear form after submit
    setFormData({
      lastName: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "generalInquiries":
        return (
          <>
            <SectionTitle>General Inquiries</SectionTitle>
            <SectionContent>
              At SoftEdge, we believe in providing immediate assistance for general inquiries. Whether you need clarification on our services, company history, or anything else, our team is ready to respond quickly and thoroughly.
            </SectionContent>
          </>
        );
      case "support":
        return (
          <>
            <SectionTitle>Support</SectionTitle>
            <SectionContent>
              Our support team is dedicated to providing ongoing assistance. If you're experiencing issues or need technical help, we ensure that you get the support you need through detailed troubleshooting and quick solutions.
            </SectionContent>
          </>
        );
      case "careers":
        return (
          <>
            <SectionTitle>Careers at SoftEdge</SectionTitle>
            <SectionContent>
              SoftEdge is a thriving organization where innovation and opportunity meet. If you’re passionate about technology, innovation, and growth, we’d love to hear from you. Check out our open positions and apply today to join our dynamic team.
            </SectionContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Description>
        We’re here to help you. Whether you’re seeking general information, looking for support, or exploring career opportunities, we’re ready to assist. Please choose an option below, and we'll ensure to address your needs with the utmost attention.
      </Description>

      <ButtonGroup>
      <Button onClick={() => handleButtonClick("support")}>Support</Button>
        <Button onClick={() => handleButtonClick("generalInquiries")}>General Inquiries</Button>
        <Button onClick={() => handleButtonClick("careers")}>Careers</Button>

      </ButtonGroup>

      <ContentWrapper>{renderContent()}</ContentWrapper>

      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Name</Label>
            <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </FormField>

          <FormField>
            <Label>Email</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormField>

          <FormField>
            <Label>Telephone</Label>
            <Input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
          </FormField>

          <FormField>
            <Label>Message</Label>
            <TextArea name="message" value={formData.message} onChange={handleChange} required />
          </FormField>

          <SubmitButtonWrapper>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </SubmitButtonWrapper>
        </form>
      </ContentWrapper>
    </ContactWrapper>
  );
};

export default Contact;