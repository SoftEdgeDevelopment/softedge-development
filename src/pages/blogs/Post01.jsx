import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import backgroundImage from "../assets/background.png"; // ✅ Background Image

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

// Wrapper for the blog post content
const PostWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1; // Ensures content is above the background
`;

// Title section with black font and white border
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white;
  margin-bottom: 1.5rem;
`;

// Centered image
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Blog content section
const Content = styled.div`
  text-align: left;
  font-size: 1.125rem;
  color: white;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

// Subheading with black font and white outline
const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
  margin-top: 2.5rem;
`;

// Go back button styling
const BackButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background: white;
  color: #4c1d95;
  border: 2px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    border-color: white;
  }
`;

const Post01 = () => {
  return (
    <>
      <BackgroundContainer />
      <PostWrapper>
        <Title>How Agile Development Boosts Business Success</Title>

        <ImageWrapper>
          <Image src="/assets/blogpost01.png" alt="Agile Development Boosts Business Success" />
        </ImageWrapper>

        <Content>
          <p>
            Agile development is not just a software methodology—it is a business strategy that enables companies 
            to adapt quickly to changing markets, drive innovation, and enhance product quality. Organizations that 
            embrace Agile report improved productivity, faster time-to-market, and higher customer satisfaction.
          </p>

          <Subheading>Understanding Agile Development</Subheading>
          <p>
            Agile development is an iterative approach that emphasizes adaptability, collaboration, and continuous 
            improvement. Unlike traditional models that follow a strict sequence, Agile encourages flexible planning 
            and iterative development cycles, allowing teams to make real-time adjustments based on feedback.
          </p>
          <p>
            The core principles of Agile include prioritizing working software over documentation, fostering strong 
            team collaboration, and maintaining a constant focus on delivering value to customers.
          </p>

          <Subheading>Key Benefits of Agile in Business</Subheading>
          <p>
            Businesses that implement Agile benefit from increased efficiency, reduced risk, and improved stakeholder 
            engagement. Agile enables faster development cycles, allowing teams to release functional components 
            regularly rather than waiting for an entire project to be completed.
          </p>
          <p>
            Enhanced collaboration between developers, designers, and business leaders leads to better alignment 
            with company goals. Additionally, Agile minimizes costly rework by incorporating user feedback early in 
            the process, ensuring that products meet real customer needs.
          </p>

          <Subheading>Popular Agile Frameworks</Subheading>
          <p>
            Agile is not a single methodology but an umbrella term covering various frameworks, each tailored for 
            different types of projects and business needs.
          </p>

          <p>
            <FaCheckCircle /> <strong>Scrum:</strong> A structured framework that organizes work into fixed-length 
            sprints, typically lasting two to four weeks. Each sprint includes planning, execution, review, and 
            retrospective phases.
          </p>
          <p>
            <FaCheckCircle /> <strong>Kanban:</strong> A visual task management system that optimizes workflow 
            efficiency by limiting work-in-progress and enabling teams to identify bottlenecks in real time.
          </p>
          <p>
            <FaCheckCircle /> <strong>Lean:</strong> A methodology focused on eliminating waste and maximizing 
            efficiency. It encourages organizations to deliver value faster by continuously refining processes.
          </p>

          <Subheading>Implementing Agile in Your Organization</Subheading>
          <p>
            Transitioning to Agile requires a cultural shift, a willingness to embrace change, and a commitment to 
            continuous learning. Businesses can start by launching Agile pilot programs, training teams on Agile 
            principles, and gradually scaling Agile across departments.
          </p>
          <p>
            Investing in Agile project management tools such as Jira, Trello, or Monday.com can streamline workflows, 
            enhance collaboration, and improve visibility into project progress. Encouraging open communication and 
            conducting regular Agile retrospectives can further optimize team performance.
          </p>

          <Subheading>Agile as a Competitive Advantage</Subheading>
          <p>
            Companies that fail to embrace Agile risk falling behind in an era of rapid technological change. Agile 
            provides a structured yet flexible approach that fosters innovation, improves efficiency, and enhances 
            customer satisfaction.
          </p>
          <p>
            Organizations that successfully implement Agile can adapt to market disruptions, optimize software 
            development cycles, and drive long-term business growth. In today’s competitive landscape, Agile is not 
            just a methodology—it is a strategic imperative.
          </p>

          <p>
            Businesses looking to integrate Agile into their processes can benefit from expert guidance and proven 
            strategies. If you’re ready to enhance your organization's efficiency and responsiveness, now is the time 
            to make the shift.
          </p>
        </Content>

        <BackButton to="/blog">← Go Back to Blog</BackButton>
      </PostWrapper>
    </>
  );
};

export default Post01;