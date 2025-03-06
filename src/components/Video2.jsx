import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import videoFile1 from "../pages/assets/video2.mp4";
import videoFile2 from "../pages/assets/video3.mp4";
import videoFile3 from "../pages/assets/video.mp4";
import videoFile4 from "../pages/assets/video4.mp4";

// Container for the videos with grid layout
const VideoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Wrapper for each video with grayscale gradient border
const VideoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 6px;
  background: linear-gradient(90deg, black, grey, white);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, white, grey, black);
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

// Video styling ensuring full visibility in **black & white** until hover
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 14px;
  display: block;
  object-fit: cover;
  pointer-events: none;
  filter: grayscale(100%); /* ✅ Initially grayscale */
  transition: filter 0.3s ease-in-out;

  ${VideoWrapper}:hover & {
    filter: grayscale(0%); /* ✅ Full color on hover */
  }
`;

const Video2 = () => {
  const navigate = useNavigate();
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  useEffect(() => {
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current.currentTime = videoRef.current.duration / 2; // ✅ Start in the middle (50%)
        });
      }
    });
  }, []);

  // Handles hover behavior
  const handleMouseEnter = (index) => {
    setIsHovered((prev) => prev.map((val, i) => (i === index ? true : val)));
    if (videoRefs[index].current) {
      videoRefs[index].current.currentTime = 0; // ✅ Restart video from beginning
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prev) => prev.map((val, i) => (i === index ? false : val)));
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
    }
  };

  return (
    <VideoContainer>
      {[
        { video: videoFile3, link: "/about" },
        { video: videoFile1, link: "/blog" },
        { video: videoFile4, link: "/careers" },
        { video: videoFile2, link: "/contact" },
      ].map((item, index) => (
        <VideoWrapper
          key={index}
          onClick={() => navigate(item.link)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <StyledVideo ref={videoRefs[index]} src={item.video} muted playsInline />
        </VideoWrapper>
      ))}
    </VideoContainer>
  );
};

export default Video2;