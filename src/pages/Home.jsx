import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Video from "../components/Video";
import Video2 from "../components/Video2";
import backgroundImage from "../pages/assets/background.png";

// Background Container (Matches Footer Color #222)
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center/cover;
    background-color: #222; /* ✅ Matches Footer */
    filter: blur(20px) brightness(1.1) grayscale(100%) opacity(0.7);
  }
`;

// Homepage Wrapper
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Intro Message Styled as a Service Card
const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 800px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  margin-bottom: 3rem;

  
`;

const IntroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black; /* ✅ Black Text */
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white; /* ✅ White Border */
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

// Video Section
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2.5rem 0;

  video {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

// Services Grid
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
  }
`;

// Service Card
const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: white;
  width: 100%;
  max-width: 280px;
  height: 100%;
  min-height: 200px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: white;
    border: 2px solid black;
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: black;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    margin-top: 1rem;
    text-align: center;
  }

  .image-wrapper {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
    transition: opacity 0.3s ease;
    position: absolute;
  }
`;

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      <BackgroundContainer />
      <HomeWrapper>
        {/* INTRO MESSAGE AS A CARD */}
        <IntroCard>
          <IntroTitle>Welcome to SoftEdge Development</IntroTitle>
          <IntroDescription>
            At SoftEdge Development, we build innovative solutions that empower businesses to thrive in the
            modern digital landscape. From digital strategies to cutting-edge technology, we help you achieve
            your vision.
          </IntroDescription>
        </IntroCard>

        <VideoContainer>
          <Video />
        </VideoContainer>

        <ServicesWrapper>
          {[
            { to: "/services/digital-strategy", img: "/assets/digital-strategy.svg", hoverImg: "/assets/digital-strategy-02.svg", title: "Digital Strategy" },
            { to: "/services/agile-management", img: "/assets/agile-management.svg", hoverImg: "/assets/agile-management-02.svg", title: "Agile Management" },
            { to: "/services/big-data-data-science", img: "/assets/big-data.svg", hoverImg: "/assets/big-data-02.svg", title: "Data Science" },
            { to: "/services/cloud-infrastructures", img: "/assets/cloud-infrastructure.svg", hoverImg: "/assets/cloud-infrastructure-02.svg", title: "Cloud Infrastructures" },
            { to: "/services/quality-test-automation", img: "/assets/quality-automation.svg", hoverImg: "/assets/quality-automation-02.svg", title: "QA Automation" },
            { to: "/services/user-experience-design", img: "/assets/user-experience.png", hoverImg: "/assets/user-experience-02.svg", title: "UX Design" },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              to={service.to}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(service.to);
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="image-wrapper">
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
            </ServiceCard>
          ))}
        </ServicesWrapper>

        <VideoContainer>
          <Video2 />
        </VideoContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;