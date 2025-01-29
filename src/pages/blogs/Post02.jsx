import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChartLine, FaLightbulb, FaDatabase } from "react-icons/fa";

// Wrapper for the blog post content
const PostWrapper = styled.div`
  padding: 0 2rem 3rem;
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
  border-radius: 0;
  margin-bottom: 2.5rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  
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

const Post02 = () => {
  return (
    <PostWrapper>
      <TitleWrapper>
        <Title>5 Big Data Strategies for Small Businesses</Title>
      </TitleWrapper>

      <ImageWrapper>
        <Image src="/assets/blogpost02.png" alt="5 Big Data Strategies for Small Businesses" />
      </ImageWrapper>

      <Content>
        <p>
          Big data is no longer the exclusive domain of large enterprises. Small businesses are now leveraging data-driven insights to gain a competitive edge in their markets. By adopting scalable and actionable big data strategies, small businesses can improve decision-making, optimize operations, and enhance customer satisfaction.
        </p>

        <Subheading><FaChartLine /> Why Big Data Matters for Small Businesses</Subheading>
        <p>
          Big data offers small businesses the opportunity to make informed decisions based on real-time analytics. By analyzing customer behavior, market trends, and operational metrics, small businesses can identify opportunities for growth and address challenges before they escalate.
        </p>
        <p>
          The key is to focus on collecting relevant data and turning it into actionable insights. With the right tools and strategies, even small businesses can unlock the power of big data to achieve their goals.
        </p>

        <Subheading><FaLightbulb /> Strategy 1: Start Small and Define Your Goals</Subheading>
        <p>
          Big data can feel overwhelming, but starting small helps you focus on the data that truly matters. Identify specific business goals—such as increasing sales, improving customer retention, or streamlining operations—and collect data that aligns with these objectives.
        </p>
        <p>
          For instance, if your goal is to improve customer retention, start by analyzing purchase history, customer feedback, and engagement patterns to identify key trends.
        </p>

        <Subheading><FaDatabase /> Strategy 2: Invest in Scalable Tools</Subheading>
        <p>
          Small businesses should invest in scalable data analytics tools that grow with their needs. Platforms like Google Analytics, Tableau, and Microsoft Power BI offer powerful features without requiring extensive technical expertise.
        </p>
        <p>
          Scalable tools allow businesses to analyze trends, visualize data, and make data-driven decisions with ease. Ensure the tools you choose integrate seamlessly with your existing systems.
        </p>

        <Subheading><FaChartLine /> Strategy 3: Focus on Customer Insights</Subheading>
        <p>
          Understanding your customers is crucial for success. Use data to segment your audience based on behavior, preferences, and demographics. Personalized marketing campaigns and targeted offers can significantly boost customer engagement and loyalty.
        </p>
        <p>
          Additionally, monitoring customer feedback across social media and reviews helps identify areas for improvement in your products or services.
        </p>

        <Subheading><FaLightbulb /> Strategy 4: Leverage Predictive Analytics</Subheading>
        <p>
          Predictive analytics uses historical data to forecast future trends. Small businesses can leverage this technology to anticipate demand, optimize inventory, and reduce operational costs.
        </p>
        <p>
          For example, a small retail store can use predictive analytics to determine which products are likely to sell during specific seasons, helping them stock inventory accordingly.
        </p>

        <Subheading><FaDatabase /> Strategy 5: Ensure Data Privacy and Security</Subheading>
        <p>
          Data privacy and security are critical for building trust with your customers. Implement robust data protection policies and comply with regulations like GDPR or CCPA. Encrypt sensitive data and limit access to ensure that customer information is handled responsibly.
        </p>
        <p>
          Transparent communication about your data practices also builds confidence with your customers, encouraging them to share more valuable insights with your business.
        </p>

        <Subheading><FaChartLine /> Conclusion: Big Data as a Growth Engine</Subheading>
        <p>
          Big data is transforming the way small businesses operate. By adopting these strategies, your business can make informed decisions, enhance customer experiences, and drive sustainable growth.
        </p>
        <p>
          The key is to start with clear objectives, invest in the right tools, and remain committed to continuous improvement. Embrace big data as a growth engine and position your small business for long-term success.
        </p>
      </Content>

      <BackButton to="/blog">← Go Back to Blog</BackButton>
    </PostWrapper>
  );
};

export default Post02;