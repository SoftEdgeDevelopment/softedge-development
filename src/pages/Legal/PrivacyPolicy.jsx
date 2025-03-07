import "react";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image

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
    filter: blur(20px) brightness(1.2) grayscale(100%) opacity(0.6); // ✅ Converted to grayscale
  }
`;

// Wrapper for Privacy Policy content
const PrivacyWrapper = styled.div`
  text-align: left;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
`;

// Title
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
  }

  p {
    font-size: 1.125rem;
    color: white;
    line-height: 1.7;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;

    li {
      font-size: 1.125rem;
      color: white;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: grey;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: black;
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
    color: grey;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: black;
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

const PrivacyPolicy = () => (
  <>
    <BackgroundContainer />
    <PrivacyWrapper>
      <Title>Privacy Policy</Title>

      <Section>
        <h2>Our Commitment to Privacy</h2>
        <p>
          At SoftEdge Development, we prioritize your privacy and are committed to safeguarding your personal data.
          This Privacy Policy explains how we collect, use, and protect your information.
        </p>
      </Section>

      <Section>
        <h2>Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>Directly from you: When you contact us, sign up for updates, or use our services.</li>
          <li>Automatically: Through cookies, analytics, and usage tracking.</li>
          <li>From third parties: Trusted service providers and public data sources.</li>
        </ul>
      </Section>

      <Section>
        <h2>How We Use Your Data</h2>
        <p>Your data is utilized for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate with you and respond to inquiries.</li>
          <li>To analyze website traffic and optimize user experience.</li>
          <li>To maintain security and prevent fraud.</li>
          <li>To comply with legal requirements.</li>
        </ul>
      </Section>

      <Section>
        <h2>Data Protection Measures</h2>
        <p>We take data security seriously and implement the following safeguards:</p>
        <ul>
          <li>Data encryption for secure transmission.</li>
          <li>Strict access controls and authentication measures.</li>
          <li>Regular system security audits.</li>
          <li>Firewalls and threat detection systems.</li>
        </ul>
      </Section>

      <Section>
        <h2>Sharing and Disclosure of Data</h2>
        <p>We do not sell your data. We may share information in these cases:</p>
        <ul>
          <li>With trusted service providers (e.g., hosting, analytics).</li>
          <li>For legal compliance and regulatory obligations.</li>
          <li>To prevent fraud or security threats.</li>
          <li>During a business transition, such as a merger or acquisition.</li>
        </ul>
      </Section>

      <Section>
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to improve user experience and website functionality.
          You can manage your cookie preferences through your browser settings.
        </p>
      </Section>

      <Section>
        <h2>Your Rights and Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your personal data.</li>
          <li>Request data deletion, subject to legal limitations.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Adjust cookie and tracking settings.</li>
        </ul>
      </Section>

      <Section>
        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or legal requirements.
          Updates will be communicated on our website. By continuing to use our services, you accept the updated terms.
        </p>
      </Section>

      <ContactInfo>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p><a href="mailto:contact@softedgedevelopment.com">contact@softedgedevelopment.com</a></p>
      </ContactInfo>

      <FooterNote>
        This Privacy Policy is effective as of January 2025.
      </FooterNote>
    </PrivacyWrapper>
  </>
);

export default PrivacyPolicy;