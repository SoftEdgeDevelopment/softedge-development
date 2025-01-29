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
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

// Uniform button styling with NO hover effects
const Button = styled.button`
  flex: 1;
  padding: 1rem;
  background: white;
  color: #4c1d95;
  border: 2px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: default;
  width: 100%;
  max-width: 280px;
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
  width: 100%;
  max-width: 800px; // Adjusted to make the form wider
  margin-left: auto;
  margin-right: auto;
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

// Input and TextArea styling - Wider width inside the form
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box; // Ensure padding doesn't affect width
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
  max-width: 300px;
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate mailto link and open default mail client
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
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

    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Description>
        Have a question or need support? Reach out to us, and we’ll get back to you as soon as possible.
      </Description>

      <ButtonGroup>
        <Button>General Inquiries</Button>
        <Button>Support</Button>
        <Button>Careers</Button>
      </ButtonGroup>

      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Last Name</Label>
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