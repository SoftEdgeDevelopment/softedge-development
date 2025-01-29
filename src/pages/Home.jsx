import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// Wrapper for the homepage content
const HomeWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Title and description styling
const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  position: relative;
  z-index: 0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    transform: scale(1.03);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 10px;
    padding: 6px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background: white;
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

  h3 {
    color: #333;
    font-size: 1.25rem;
    margin: 1rem 0;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
  }

  &:hover h3,
  &:hover p {
    color: white;
  }
`;

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Handle navigation with scroll to top behavior
  const handleNavigate = (path) => {
    // Immediately scroll to top before navigating
    window.scrollTo(0, 0);

    // Then navigate to the target path
    navigate(path);
  };

  return (
    <HomeWrapper>
      <Title>Welcome to SoftEdge Development</Title>
      <Description>
        At SoftEdge Development, we build innovative solutions that empower businesses to thrive in the
        modern digital landscape. From digital strategies to cutting-edge technology, we help you achieve
        your vision.
      </Description>

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
  );
};

export default Home;