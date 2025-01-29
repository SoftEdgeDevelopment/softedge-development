import React from "react";
import styled from "styled-components";

const PrivacyWrapper = styled.div`
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
    color: #9d174d;
    text-decoration: none;

    &:hover {
      color: rgb(108, 15, 52);
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

const PrivacyPolicy = () => (
  <PrivacyWrapper>
    <Title>Privacy Policy</Title>
    <Section>
      <h2>Our Commitment to Privacy</h2>
      <p>
        At SoftEdge Development, your privacy is a top priority. We are committed to protecting your personal information and
        providing transparency about how your data is collected, used, and safeguarded.
      </p>
    </Section>
    <Section>
      <h2>How We Collect Your Data</h2>
      <p>We may collect information through the following methods:</p>
      <ul>
        <li>Direct interactions: Filling out forms or contacting us directly.</li>
        <li>Automated technologies: Cookies, analytics tools, and similar technologies.</li>
        <li>Third-party sources: Trusted partners and publicly available information.</li>
      </ul>
    </Section>
    <Section>
      <h2>How We Use Your Data</h2>
      <p>Your data is utilized to:</p>
      <ul>
        <li>Improve and personalize our services.</li>
        <li>Communicate with you and respond to your inquiries.</li>
        <li>Analyze usage patterns and optimize website functionality.</li>
        <li>Ensure the security and reliability of our systems.</li>
        <li>Comply with legal obligations and enforce our terms of service.</li>
      </ul>
    </Section>
    <Section>
      <h2>How We Protect Your Data</h2>
      <p>
        We employ robust security measures to ensure your data remains secure, including:
      </p>
      <ul>
        <li>Data encryption during transmission and storage.</li>
        <li>Access controls to limit unauthorized access.</li>
        <li>Regular security audits and vulnerability assessments.</li>
        <li>Firewall protections and monitoring systems.</li>
      </ul>
    </Section>
    <Section>
      <h2>Data Sharing and Disclosure</h2>
      <p>
        Your data may be shared with third parties in the following circumstances:
      </p>
      <ul>
        <li>With trusted service providers to support our operations (e.g., hosting, analytics).</li>
        <li>To comply with legal requirements or respond to lawful requests.</li>
        <li>To protect our rights, privacy, safety, or property.</li>
        <li>In the event of a business transition, such as a merger or acquisition.</li>
      </ul>
    </Section>
    <Section>
      <h2>Policy Updates</h2>
      <p>
        This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. Updates will
        be communicated on our website, and the "Last Updated" date will be revised accordingly. By continuing to use our
        services, you accept the updated terms.
      </p>
    </Section>
    <ContactInfo>
      
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us:
      </p>
      
    </ContactInfo>
    <FooterNote>
      This Privacy Policy is effective as of January 2025.
    </FooterNote>
  </PrivacyWrapper>
);

export default PrivacyPolicy;