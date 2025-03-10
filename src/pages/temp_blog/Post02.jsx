import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChartLine, FaLightbulb, FaDatabase } from "react-icons/fa";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image

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

const Post02 = () => {
  return (
    <>
      <BackgroundContainer />
      <PostWrapper>
        <Title>5 Big Data Strategies for Small Businesses</Title>

        <ImageWrapper>
          <Image src="/assets/blogpost02.png" alt="5 Big Data Strategies for Small Businesses" />
        </ImageWrapper>

        <Content>
          <p>
            Big data is no longer a tool reserved for large enterprises. Small businesses can leverage data-driven 
            insights to gain a competitive edge, enhance decision-making, and improve customer experiences. By adopting 
            the right big data strategies, even small businesses can achieve remarkable growth.
          </p>

          <Subheading><FaChartLine /> Why Big Data Matters for Small Businesses</Subheading>
          <p>
            Small businesses generate valuable data every day—through sales transactions, customer interactions, 
            social media engagements, and more. By analyzing this data effectively, businesses can uncover hidden 
            trends, optimize their operations, and make more informed business decisions.
          </p>

          <Subheading><FaLightbulb /> Strategy 1: Start Small and Define Your Goals</Subheading>
          <p>
            It’s easy to get overwhelmed by the vast amount of data available. Instead of trying to analyze everything 
            at once, start by identifying specific business goals. Are you trying to improve customer retention, 
            optimize pricing, or enhance marketing strategies? Focus on collecting and analyzing the most relevant data 
            to achieve these objectives.
          </p>

          <Subheading><FaDatabase /> Strategy 2: Invest in Scalable Data Analytics Tools</Subheading>
          <p>
            Small businesses can benefit from cost-effective and scalable data analytics tools such as Google Analytics, 
            Microsoft Power BI, and Tableau. These platforms allow business owners to track trends, measure key 
            performance indicators, and make real-time decisions without requiring a data science background.
          </p>

          <Subheading><FaChartLine /> Strategy 3: Focus on Customer Insights</Subheading>
          <p>
            Understanding customer behavior is one of the most powerful applications of big data. By analyzing 
            purchasing patterns, website traffic, and engagement metrics, businesses can tailor marketing strategies 
            and create personalized customer experiences.
          </p>
          <p>
            Implementing customer segmentation based on preferences and behaviors allows businesses to deliver more 
            targeted promotions and improve customer satisfaction.
          </p>

          <Subheading><FaLightbulb /> Strategy 4: Use Predictive Analytics to Stay Ahead</Subheading>
          <p>
            Predictive analytics helps businesses anticipate future trends based on historical data. For example, 
            retailers can forecast demand for seasonal products, and service providers can predict when customers are 
            likely to need support. This proactive approach leads to more efficient inventory management, reduced 
            waste, and increased revenue.
          </p>

          <Subheading><FaDatabase /> Strategy 5: Prioritize Data Security and Compliance</Subheading>
          <p>
            As businesses collect and store more customer data, ensuring data privacy and security is essential. 
            Implementing strong encryption, access controls, and compliance with regulations like GDPR and CCPA helps 
            build customer trust and protect sensitive information.
          </p>
          <p>
            Businesses that fail to secure customer data risk severe legal consequences and damage to their reputation. 
            Investing in cybersecurity measures is crucial for any business utilizing big data.
          </p>

          <Subheading><FaChartLine /> Conclusion: Unlocking the Potential of Big Data</Subheading>
          <p>
            Big data is a powerful tool for small businesses looking to compete in today's digital world. By starting 
            with clear objectives, using scalable tools, focusing on customer insights, leveraging predictive analytics, 
            and ensuring data security, businesses can make data-driven decisions that drive growth.
          </p>
          <p>
            The key is to embrace data as a strategic asset. With the right approach, small businesses can unlock new 
            opportunities, streamline operations, and create meaningful connections with their customers.
          </p>
        </Content>

        <BackButton to="/blog">← Go Back to Blog</BackButton>
      </PostWrapper>
    </>
  );
};

export default Post02;