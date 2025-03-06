import  { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    filter: blur(20px) brightness(1.2) grayscale(100%) opacity(0.6); // ✅ Converted to grayscale
  }
`;

// Wrapper for the blog content
const BlogWrapper = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  position: relative;
  z-index: 1; // Ensures content is above the background
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
    font-size: 1rem;
    text-align: center;
  }
`;

// Blog grid container
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // ✅ 3 columns on desktop
  gap: 2.5rem;
  margin-top: 2rem;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); // ✅ 2 columns on medium screens
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // ✅ Stacks 1 card per row on mobile
  }
`;

// Individual blog card styling
const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2); // ✅ Glassmorphism effect
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: black;
  position: relative;
  z-index: 0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent; 

  &:hover {
    background: white;
    color: black;
    transform: scale(1.03);
    border: 2px solid black;
    border-radius: 12px;
  }

  &:hover p {
    color: black;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: black;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: white;
    line-height: 1.7;
    text-align: center;
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
    transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
    position: absolute;
    filter: grayscale(100%); /* ✅ Black & white by default */
  }

  &:hover img {
    filter: grayscale(0%); /* ✅ Restores color on hover */
  }
`;

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Ensures the page starts at the top
  }, []);

  return (
    <>
      <BackgroundContainer />
      <BlogWrapper>
        <Title>Our Blog</Title>
        <Description>
          Explore the latest insights, trends, and tips in technology, business, and innovation. Stay
          informed with SoftEdge Development.
        </Description>

        <BlogGrid>
          {[
            {
              to: "/blog/post-01",
              img: "/assets/blogpost01.png",
              title: "How Agile Development Boosts Business Success",
              desc: "Discover the key principles of agile development and how it can transform your business processes.",
            },
            {
              to: "/blog/post-02",
              img: "/assets/blogpost02.png",
              title: "5 Big Data Strategies for Small Businesses",
              desc: "Learn how small businesses can leverage big data to gain a competitive edge in the market.",
            },
            {
              to: "/blog/post-03",
              img: "/assets/blogpost03.png",
              title: "The Future of Cloud Computing",
              desc: "Explore the latest advancements in cloud computing and what they mean for businesses of all sizes.",
            }
          ].map((blog, index) => (
            <BlogCard key={index} to={blog.to}>
              <div className="image-wrapper">
                <img src={blog.img} alt={blog.title} />
              </div>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogWrapper>
    </>
  );
};

export default Blog;