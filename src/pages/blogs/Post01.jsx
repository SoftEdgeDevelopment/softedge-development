import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

// Wrapper for the blog post content
const PostWrapper = styled.div`
  padding: 0 2rem 3rem; /* Removed top padding */
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

// Full-width title section (no white space above)
const TitleWrapper = styled.div`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  color: white;
  text-align: left;
  padding: 1.5rem 2rem;
  border-radius: 0; /* Remove border radius for full width */
  margin-bottom: 2.5rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white; /* Change title color to white */
  
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
  color: #444;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

// Subheading styling with gradient background
const Subheading = styled.h2`
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  width: 100%;
  border-radius: 8px;
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
    <PostWrapper>
      <TitleWrapper>
        <Title>How Agile Development Boosts Business Success</Title>
      </TitleWrapper>

      <ImageWrapper>
        <Image src="/assets/blogpost01.png" alt="Agile Development Boosts Business Success" />
      </ImageWrapper>

      <Content>
        <p>
          Agile development is not just a software methodology—it is a business strategy that enables companies to adapt quickly to changing markets, drive innovation, and enhance product quality. Organizations that embrace Agile report improved productivity, faster time-to-market, and higher customer satisfaction.
        </p>

        <Subheading>Understanding Agile Development</Subheading>
        <p>
          Agile development is an iterative approach that emphasizes adaptability, collaboration, and continuous improvement. Unlike traditional models that follow a strict sequence, Agile encourages flexible planning and iterative development cycles, allowing teams to make real-time adjustments based on feedback.
        </p>
        <p>
          The core principles of Agile include prioritizing working software over documentation, fostering strong team collaboration, and maintaining a constant focus on delivering value to customers.
        </p>

        <Subheading>Key Benefits of Agile in Business</Subheading>
        <p>
          Businesses that implement Agile benefit from increased efficiency, reduced risk, and improved stakeholder engagement. Agile enables faster development cycles, allowing teams to release functional components regularly rather than waiting for an entire project to be completed.
        </p>
        <p>
          Enhanced collaboration between developers, designers, and business leaders leads to better alignment with company goals. Additionally, Agile minimizes costly rework by incorporating user feedback early in the process, ensuring that products meet real customer needs.
        </p>

        <Subheading>Popular Agile Frameworks</Subheading>
        <p>
          Agile is not a single methodology but an umbrella term covering various frameworks, each tailored for different types of projects and business needs.
        </p>
        
        <p>
          <FaCheckCircle /> <strong>Scrum:</strong> A structured framework that organizes work into fixed-length sprints, typically lasting two to four weeks. Each sprint includes planning, execution, review, and retrospective phases.
        </p>
        <p>
          <FaCheckCircle /> <strong>Kanban:</strong> A visual task management system that optimizes workflow efficiency by limiting work-in-progress and enabling teams to identify bottlenecks in real time.
        </p>
        <p>
          <FaCheckCircle /> <strong>Lean:</strong> A methodology focused on eliminating waste and maximizing efficiency. It encourages organizations to deliver value faster by continuously refining processes.
        </p>

        <Subheading>Implementing Agile in Your Organization</Subheading>
        <p>
          Transitioning to Agile requires a cultural shift, a willingness to embrace change, and a commitment to continuous learning. Businesses can start by launching Agile pilot programs, training teams on Agile principles, and gradually scaling Agile across departments.
        </p>
        <p>
          Investing in Agile project management tools such as Jira, Trello, or Monday.com can streamline workflows, enhance collaboration, and improve visibility into project progress. Encouraging open communication and conducting regular Agile retrospectives can further optimize team performance.
        </p>

        <Subheading>Agile as a Competitive Advantage</Subheading>
        <p>
          Companies that fail to embrace Agile risk falling behind in an era of rapid technological change. Agile provides a structured yet flexible approach that fosters innovation, improves efficiency, and enhances customer satisfaction.
        </p>
        <p>
          Organizations that successfully implement Agile can adapt to market disruptions, optimize software development cycles, and drive long-term business growth. In today’s competitive landscape, Agile is not just a methodology—it is a strategic imperative.
        </p>

        <p>
          Businesses looking to integrate Agile into their processes can benefit from expert guidance and proven strategies. If you’re ready to enhance your organization's efficiency and responsiveness, now is the time to make the shift.
        </p>
      </Content>

      <BackButton to="/blog">← Go Back to Blog</BackButton>
    </PostWrapper>
  );
};

export default Post01;