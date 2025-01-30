import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Video from "../components/Video"; // Import Video component
import backgroundImage from "../pages/assets/background.png"; // ✅ Correct path for background image

// Full-page background container
const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; // Puts background behind everything
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
    filter: blur(20px) brightness(1.3) opacity(0.6); // ✅ Applies blur, brightness, and opacity
  }
`;

// Wrapper for the homepage content
const HomeWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1; // Ensures content is above the background
`;

// Updated Title - Black font with white outline
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: black; // ✅ Black font
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white; // ✅ White border effect
  margin-bottom: 1.5rem;
`;

// Updated Description - Text is white
const Description = styled.p`
  font-size: 1.125rem;
  color: white; // ✅ Changed to white
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Centered Video Section
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

// Services grid container
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
`;

// Individual service card styling
const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px); // ✅ Soft frosted blur
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  position: relative;
  z-index: 0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent; // ✅ Transparent border

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    transform: scale(1.03);
    border: 2px solid black; // ✅ White border on hover
    border-radius: 12px; // ✅ Rounded corners on hover
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: black; // ✅ Black font
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white; // ✅ White border effect
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: white; // ✅ Text is white
    line-height: 1.7;
  }

  .image-wrapper {
    width: 100%;
    height: 150px;
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

  &:hover h3,
  &:hover p {
    
  }
`;

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Handle navigation with scroll to top behavior
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
                <img
                  src={service.defaultImg}
                  alt={service.title}
                  style={{ opacity: hoveredCard === index ? 0 : 1 }}
                />
                <img
                  src={service.hoverImg}
                  alt={`${service.title} Hover`}
                  style={{ opacity: hoveredCard === index ? 1 : 0 }}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </ServiceCard>
          ))}
        </ServicesWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;