import React from "react";
import styled from "styled-components";
import backgroundImage from "../pages/assets/background.png"; // ✅ Background Image

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

// Wrapper for Terms of Service content
const TermsWrapper = styled.div`
  text-align: left;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
`;

// Title with black font & white outline (consistent with other pages)
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 2rem;
  text-align: center;
`;

// Section Wrapper
const Section = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin-bottom: 1rem;
    text-align: left;
  }

  p {
    font-size: 1.125rem;
    color: white;
    line-height: 1.7;
    text-align: left;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
    text-align: left;

    li {
      font-size: 1.125rem;
      color: white;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #9d174d;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: rgb(108, 15, 52);
      text-decoration: underline;
    }
  }
`;

// Contact Information Section
const ContactInfo = styled.div`
  margin-top: 3rem;
  font-size: 1rem;
  color: white;
  text-align: center;

  a {
    color: #9d174d;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: rgb(108, 15, 52);
      text-decoration: underline;
    }
  }
`;

// Footer Note
const FooterNote = styled.p`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: white;
  text-align: center;
  opacity: 0.8;
`;

const TermsOfService = () => (
  <>
    <BackgroundContainer />
    <TermsWrapper>
      <Title>Terms of Service</Title>

      <Section>
        <h2>Agreement to Receive Text Messages</h2>
        <p>
          By providing your phone number to SoftEdge Development, you agree and acknowledge that we may send text messages to your wireless phone number for any purpose. Message and data rates may apply. You can opt out of receiving messages at any time by replying with "STOP."
        </p>
        <p>
          For more details, please review our <a href="/privacy">Privacy Policy</a>.
        </p>
      </Section>

      <Section>
        <h2>Mobile Information Usage</h2>
        <p>
          We do not share your mobile information with third parties or affiliates for marketing purposes. All categories exclude text messaging originator opt-in data and consent, which will never be shared with unauthorized parties.
        </p>
      </Section>

      <Section>
        <h2>Limitation of Liability</h2>
        <p>
          SoftEdge Development is not responsible for any damages or losses incurred due to the use of our services or reliance on the information provided on our platform. While we strive to maintain accurate and secure operations, no system is entirely immune to disruptions or breaches.
        </p>
      </Section>

      <Section>
        <h2>Modification of Terms</h2>
        <p>
          We reserve the right to modify these terms and conditions at any time. Changes will be communicated via our website, and the updated terms will take effect upon posting. Continued use of our services indicates your acceptance of the updated terms.
        </p>
      </Section>

      <Section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the United States. Any disputes arising from these terms will be resolved in the jurisdiction of our headquarters.
        </p>
      </Section>

      <ContactInfo>
        <p>If you have any questions or concerns regarding these Terms & Conditions, please contact us at:</p>
        <p><a href="mailto:contact@softedgedevelopment.com">contact@softedgedevelopment.com</a></p>
      </ContactInfo>

      <FooterNote>
        These Terms & Conditions are effective as of January 2025.
      </FooterNote>
    </TermsWrapper>
  </>
);

export default TermsOfService;