import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  transition: background 0.3s ease;

  /* Hover effect */
  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c); /* Gradient on hover */
    color: white;
  }

  /* Gradient border with pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 10px;
    padding: 6px; /* Border thickness */
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    transition: background-color 0.3s ease;
  }

  /* Change border to white on hover */
  &:hover::before {
    background: white;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: contain; /* Ensure SVG content fits properly */
    border-radius: 8px;
    transition: opacity 0.3s ease;
  }

  /* Change image to _02 version on hover */
  &:hover img {
    content: url(${(props) => props.hoverImage}); /* Change image */
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

  /* Change text color to white on hover */
  &:hover h3, &:hover p {
    color: white;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Welcome to SoftEdge Development</Title>
      <Description>
        At SoftEdge Development, we build innovative solutions that empower businesses to thrive in the
        modern digital landscape. From digital strategies to cutting-edge technology, we help you achieve
        your vision.
      </Description>

      <ServicesWrapper>
        <ServiceCard to="/services/digital-strategy" hoverImage="/assets/digital-strategy-02.svg">
          <img src="/assets/digital-strategy.svg" alt="Digital Strategy" />
          <h3>Digital Strategy</h3>
          <p>Develop innovative digital strategies for your business.</p>
        </ServiceCard>
        <ServiceCard to="/services/agile-management" hoverImage="/assets/agile-management-02.svg">
          <img src="/assets/agile-management.svg" alt="Agile Management" />
          <h3>Agile Management</h3>
          <p>Transform your business with agile methodologies.</p>
        </ServiceCard>
        <ServiceCard to="/services/big-data-data-science" hoverImage="/assets/big-data-02.svg">
          <img src="/assets/big-data.svg" alt="Big Data & Science" />
          <h3>Big Data & Data Science</h3>
          <p>Unlock insights from big data and advanced analytics.</p>
        </ServiceCard>
        <ServiceCard to="/services/cloud-infrastructures" hoverImage="/assets/cloud-infrastructure-02.svg">
          <img src="/assets/cloud-infrastructure.svg" alt="Cloud Infrastructure" />
          <h3>Cloud Infrastructures</h3>
          <p>Scale your business with cutting-edge cloud solutions.</p>
        </ServiceCard>
        <ServiceCard to="/services/quality-test-automation" hoverImage="/assets/quality-automation-02.svg">
          <img src="/assets/quality-automation.svg" alt="Quality & Test Automation" />
          <h3>Quality & Test Automation</h3>
          <p>Ensure product quality with automated testing processes.</p>
        </ServiceCard>
        <ServiceCard to="/services/user-experience-design" hoverImage="/assets/user-experience-02.svg">
          <img src="/assets/user-experience.svg" alt="User Experience Design" />
          <h3>User Experience Design</h3>
          <p>Craft intuitive and user-friendly digital experiences.</p>
        </ServiceCard>
      </ServicesWrapper>
    </HomeWrapper>
  );
};

export default Home;