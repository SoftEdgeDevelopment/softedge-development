import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background: transparent;
  padding: 1rem 0;
`;

const LogoLink = styled(Link)`
  display: block;
  width: 150px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to="/">
        <img src="/assets/logo.png" alt="SoftEdge Development Logo" />
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;