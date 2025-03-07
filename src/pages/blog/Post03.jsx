import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCloud, FaServer, FaShieldAlt, FaRocket, FaCog } from "react-icons/fa";
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

const Post03 = () => {
  return (
    <>
      <BackgroundContainer />
      <PostWrapper>
        <Title>The Future of Cloud Computing</Title>

        <ImageWrapper>
          <Image src="/assets/blogpost03.png" alt="The Future of Cloud Computing" />
        </ImageWrapper>

        <Content>
          <p>
            Cloud computing has fundamentally transformed the way businesses operate, offering unmatched scalability, 
            flexibility, and efficiency. As technology continues to evolve, cloud computing is advancing at an 
            unprecedented pace. From AI integration to serverless computing, the future of cloud technology is set to 
            redefine the digital landscape.
          </p>

          <Subheading><FaCloud /> The Rise of Multi-Cloud and Hybrid Cloud Strategies</Subheading>
          <p>
            Companies are increasingly adopting multi-cloud and hybrid cloud strategies to balance performance, 
            security, and cost-efficiency. Multi-cloud environments leverage multiple cloud providers such as AWS, 
            Google Cloud, and Microsoft Azure, reducing reliance on a single vendor and ensuring higher availability.
          </p>
          <p>
            Hybrid cloud solutions, which integrate private and public clouds, offer the best of both worlds—enhancing 
            security while maintaining the scalability needed to handle fluctuating workloads.
          </p>

          <Subheading><FaServer /> Serverless Computing: The Next Generation</Subheading>
          <p>
            Serverless computing is revolutionizing cloud architecture by eliminating the need for businesses to manage 
            infrastructure manually. Cloud providers automatically allocate computing resources, optimizing efficiency 
            and reducing operational costs.
          </p>
          <p>
            This pay-as-you-go model enables developers to focus on building applications without worrying about server 
            maintenance, making serverless computing a critical component of the future cloud ecosystem.
          </p>

          <Subheading><FaShieldAlt /> Security and Compliance in the Cloud</Subheading>
          <p>
            As cloud adoption grows, so do concerns around security and compliance. Future cloud solutions will 
            prioritize advanced encryption, AI-powered cybersecurity, and zero-trust security models.
          </p>
          <p>
            Businesses must also navigate evolving regulatory frameworks such as GDPR and CCPA to ensure compliance. 
            Leading cloud providers are implementing enhanced security protocols to protect sensitive data and reduce 
            the risks of cyber threats.
          </p>

          <Subheading><FaRocket /> The Role of AI and Machine Learning in Cloud Computing</Subheading>
          <p>
            Artificial intelligence (AI) and machine learning (ML) are becoming integral components of cloud computing, 
            enabling businesses to automate processes, analyze vast amounts of data, and enhance decision-making.
          </p>
          <p>
            AI-driven cloud platforms offer predictive analytics, intelligent automation, and real-time insights, 
            allowing companies to optimize workflows and improve efficiency across various industries.
          </p>

          <Subheading><FaCog /> Cloud Computing and Edge Technology: A Powerful Synergy</Subheading>
          <p>
            Edge computing is rapidly gaining traction as businesses seek to process data closer to the source, reducing 
            latency and improving real-time processing capabilities. By integrating cloud computing with edge 
            technology, businesses can achieve faster data analysis and more efficient operations.
          </p>
          <p>
            This combination is particularly crucial for applications such as autonomous vehicles, IoT devices, and 
            smart infrastructure, where immediate decision-making is essential.
          </p>

          <Subheading><FaCloud /> The Future is Cloud-Native</Subheading>
          <p>
            Cloud-native development is set to become the standard for modern applications. By leveraging 
            microservices, containerization, and DevOps practices, businesses can build scalable, high-performance 
            applications tailored for cloud environments.
          </p>
          <p>
            Cloud-native architectures enhance agility, resilience, and cost-efficiency, making them an essential 
            component of future enterprise solutions.
          </p>

          <Subheading><FaRocket /> Conclusion: The Cloud Revolution is Here</Subheading>
          <p>
            The future of cloud computing is brimming with possibilities. Organizations that embrace emerging cloud 
            technologies will benefit from increased scalability, enhanced security, and improved operational agility.
          </p>
          <p>
            As cloud providers continue to innovate, businesses must stay ahead of the curve by adopting cloud-native 
            strategies, integrating AI and edge computing, and ensuring data security. The cloud revolution is not just 
            a trend—it is the foundation for the next era of digital transformation.
          </p>
        </Content>

        <BackButton to="/blog">← Go Back to Blog</BackButton>
      </PostWrapper>
    </>
  );
};

export default Post03;