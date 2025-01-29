import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Wrapper for the blog content
const BlogWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
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

// Blog grid container
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  align-items: stretch;
`;

// Individual blog card styling
const BlogCard = styled(Link)`
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    z-index: -1;
    border-radius: 10px; /* Matches parent radius */
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
    object-fit: cover; /* Ensure image fits properly */
    border-radius: 8px;
    transition: opacity 0.3s ease;
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
  &:hover h3,
  &:hover p {
    color: white;
  }
`;

const Blog = () => {
  return (
    <BlogWrapper>
      <Title>Our Blog</Title>
      <Description>
        Explore the latest insights, trends, and tips in technology, business, and innovation. Stay
        informed with SoftEdge Development.
      </Description>

      <BlogGrid>
        <BlogCard to="/blogs/post-01">
          <img src="/assets/blogpost01.png" alt="Blog Post 1" />
          <h3>How Agile Development Boosts Business Success</h3>
          <p>Discover the key principles of agile development and how it can transform your business processes.</p>
        </BlogCard>
        <BlogCard to="/blogs/post-02">
          <img src="/assets/blogpost02.png" alt="Blog Post 2" />
          <h3>5 Big Data Strategies for Small Businesses</h3>
          <p>Learn how small businesses can leverage big data to gain a competitive edge in the market.</p>
        </BlogCard>
        <BlogCard to="/blogs/post-03">
          <img src="/assets/blogpost03.png" alt="Blog Post 3" />
          <h3>The Future of Cloud Computing</h3>
          <p>Explore the latest advancements in cloud computing and what they mean for businesses of all sizes.</p>
        </BlogCard>
      </BlogGrid>
    </BlogWrapper>
  );
};

export default Blog;