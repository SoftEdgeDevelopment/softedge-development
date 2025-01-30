import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Video from "../components/Video";
import Video2 from "../components/Video2";
import backgroundImage from "../pages/assets/background.png";

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

// Wrapper for homepage content
const HomeWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Title
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
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

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;

// Centered Video Section
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

// Services Grid (Perfectly Centered & Same Size)
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: center;
  justify-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // ✅ Two-column grid on mobile
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // ✅ Stacks into one column on very small screens
  }
`;

// Service Cards (Always Same Size & Properly Spaced)
const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  width: 260px;  // ✅ Exact same width
  height: 320px; // ✅ Exact same height for all cards
  position: relative;
  z-index: 0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    transform: scale(1.03);
    border: 2px solid black;
    border-radius: 12px;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: bold;
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin: 1rem 0 0.5rem; // ✅ Added space between title and image
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    color: white;
    line-height: 1.5;
    text-align: center;
    margin-top: 0.5rem; // ✅ Adjusted spacing
  }

  .image-wrapper {
    width: 100%;
    height: 110px;
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
        <Title>Welcome to SofEdge Development</Title>
        <Description>
          At SofEdge Development, we build innovative solutions that empower businesses to thrive in the
          modern digital landscape. From digital strategies to cutting-edge technology, we help you achieve
          your vision.
        </Description>

        {/* Centered Video Section */}
        <VideoContainer>
          <Video />
        </VideoContainer>

        {/* Services Section (Now Centered, Same Size, and with Descriptions) */}
        <ServicesWrapper>
          {[
            { to: "/services/digital-strategy", defaultImg: "/assets/digital-strategy.svg", title: "Digital Strategy", desc: "Develop innovative digital strategies for your business." },
            { to: "/services/agile-management", defaultImg: "/assets/agile-management.svg", title: "Agile Management", desc: "Transform your business with agile methodologies." },
            { to: "/services/big-data-data-science", defaultImg: "/assets/big-data.svg", title: "Big Data & Data Science", desc: "Unlock insights from big data and advanced analytics." },
            { to: "/services/cloud-infrastructures", defaultImg: "/assets/cloud-infrastructure.svg", title: "Cloud Infrastructures", desc: "Scale your business with cutting-edge cloud solutions." },
            { to: "/services/quality-test-automation", defaultImg: "/assets/quality-automation.svg", title: "Quality & Test Automation", desc: "Ensure product quality with automated testing processes." },
            { to: "/services/user-experience-design", defaultImg: "/assets/user-experience.svg", title: "User Experience Design", desc: "Craft intuitive and user-friendly digital experiences." },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              to={service.to}
              onClick={() => handleNavigate(service.to)}
            >
              <div className="image-wrapper">
                <img src={service.defaultImg} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </ServiceCard>
          ))}
        </ServicesWrapper>

        {/* Centered Video Section */}
        <VideoContainer>
          <Video2 />
        </VideoContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;