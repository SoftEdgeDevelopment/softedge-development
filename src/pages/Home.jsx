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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    display: none;
  }
`;

// Centered Video Section
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2.5rem 0;
`;

// Services Grid with improved spacing
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
  }
`;

// Service Cards with consistent spacing and hover effect
const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: #333;
  width: 100%;
  max-width: 320px;
  height: 300px;
  position: relative;
  z-index: 0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    transform: scale(1.05);
    border: 2px solid black;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin-top: 1.2rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: white;
    line-height: 1.7;
    text-align: center;
    margin-top: 0.8rem;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .image-wrapper {
    width: 100%;
    height: 160px;
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
        <Title>Welcome to SoftEdge Development</Title>
        <Description>
          At SoftEdge Development, we build innovative solutions that empower businesses to thrive in the
          modern digital landscape. From digital strategies to cutting-edge technology, we help you achieve
          your vision.
        </Description>

        {/* Centered Video Section */}
        <VideoContainer>
          <Video />
        </VideoContainer>

        <ServicesWrapper>
          {[
            {
              to: "/services/digital-strategy",
              defaultImg: "/assets/digital-strategy.svg",
              hoverImg: "/assets/digital-strategy-02.svg",
              title: "Digital Strategy",
              desc: "Develop innovative digital strategies for your business.",
            },
            {
              to: "/services/agile-management",
              defaultImg: "/assets/agile-management.svg",
              hoverImg: "/assets/agile-management-02.svg",
              title: "Agile Management",
              desc: "Transform your business with agile methodologies.",
            },
            {
              to: "/services/big-data-data-science",
              defaultImg: "/assets/big-data.svg",
              hoverImg: "/assets/big-data-02.svg",
              title: "Big Data & Data Science",
              desc: "Unlock insights from big data and advanced analytics.",
            },
            {
              to: "/services/cloud-infrastructures",
              defaultImg: "/assets/cloud-infrastructure.svg",
              hoverImg: "/assets/cloud-infrastructure-02.svg",
              title: "Cloud Infrastructures",
              desc: "Scale your business with cutting-edge cloud solutions.",
            },
            {
              to: "/services/quality-test-automation",
              defaultImg: "/assets/quality-automation.svg",
              hoverImg: "/assets/quality-automation-02.svg",
              title: "Quality & Test Automation",
              desc: "Ensure product quality with automated testing processes.",
            },
            {
              to: "/services/user-experience-design",
              defaultImg: "/assets/user-experience.svg",
              hoverImg: "/assets/user-experience-02.svg",
              title: "User Experience Design",
              desc: "Craft intuitive and user-friendly digital experiences.",
            },
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
                <img src={service.defaultImg} alt={service.title} style={{ opacity: hoveredCard === index ? 0 : 1 }} />
                <img src={service.hoverImg} alt={`${service.title} Hover`} style={{ opacity: hoveredCard === index ? 1 : 0 }} />
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