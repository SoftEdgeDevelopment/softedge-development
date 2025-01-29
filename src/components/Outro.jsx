import styled from "styled-components";

const GradientLine = styled.div`
  width: 100%;
  height: 4px; /* ✅ Thin gradient line */
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
`;

const FooterTop = styled.div`
  background-color: #222; /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const MissionStatement = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  margin: 0;
  text-align: center;
`;

const Outro = () => (
  <>
    <GradientLine /> {/* ✅ Full-width gradient line */}
    <FooterTop>
      <Logo src="/assets/logo.png" alt="SoftEdge Development Logo" />
      <MissionStatement>
        At SoftEdge Development, we believe that a customer experience is the aggregate of all the touchpoints that our clients experience with our services.
      </MissionStatement>
    </FooterTop>
  </>
);

export default Outro;