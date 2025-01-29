import React from "react";
import styled from "styled-components";

const TermsWrapper = styled.div`
  background-color: #f9f9f9; /* Light background for readability */
  color: #333; /* Standard text color */
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto; /* Center content */
  text-align: center; /* Center-align content */
  font-family: "Arial", sans-serif;
  line-height: 1.8;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4c1d95; /* Accent color */
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  h2 {
    font-size: 1.75rem;
    color: #9d174d; /* Secondary accent color */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555; /* Subdued text color */
    line-height: 1.8;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
    text-align: left;

    li {
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #9d174d
    text-decoration: none;

    &:hover {
      color:rgb(108, 15, 52);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  font-size: 0.875rem;
  color: #666;

  a {
    color: #9d174d;
    text-decoration: none;

    &:hover {
      color: rgb(108, 15, 52);
    }
  }
`;

const FooterNote = styled.p`
  margin-top: 1.5rem;
  font-size: 0.75rem;
  color: #999;
`;

const TermsOfService = () => (
  <TermsWrapper>
    <Title>Terms of Service</Title>
    <Section>
      <h2>Agreement to Receive Text Messages</h2>
      <p>
        By providing your phone number to SoftEdge Development, you agree and acknowledge that we may send text messages to your wireless phone number for any purpose. Message and data rates may apply. You can opt out of receiving messages at any time by replying with "STOP."
      </p>
      <p>
        For more details about how we handle your information, please review our <a href="/privacy">Privacy Policy</a>.
      </p>
    </Section>
    <Section>
      <h2>Mobile Information Usage</h2>
      <p>
        We do not share your mobile information with third parties or affiliates for marketing or promotional purposes. All categories exclude text messaging originator opt-in data and consent, which will never be shared with any unauthorized parties.
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
      
      <p>
        If you have any questions or concerns regarding these Terms & Conditions, please contact us:
      </p>
      
    </ContactInfo>
    <FooterNote>
      These Terms & Conditions are effective as of January 2025.
    </FooterNote>
  </TermsWrapper>
);

export default TermsOfService;