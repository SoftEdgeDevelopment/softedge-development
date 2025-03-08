import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import videoFile1 from "../../public/assets/video2.mp4";
import videoFile2 from "../../public/assets/video3.mp4";
import videoFile3 from "../../public/assets/video.mp4";
import videoFile4 from "../../public/assets/video4.mp4";

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
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  ${VideoWrapper}:hover & {
    filter: grayscale(0%);
  }
`;

const Video2 = () => {
  const navigate = useNavigate();
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        // Ensure the video has a valid duration before setting currentTime
        const setVideoTime = () => {
          if (!isNaN(videoRef.current.duration) && isFinite(videoRef.current.duration)) {
            videoRef.current.currentTime = videoRef.current.duration / 2;
            videoRef.current.play().catch(() => {}); // Handle autoplay restrictions
          }
        };

        videoRef.current.addEventListener("loadedmetadata", setVideoTime);
        return () => videoRef.current.removeEventListener("loadedmetadata", setVideoTime);
      }
    });
  }, []);

  // Function to navigate and scroll to the top
  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <VideoContainer>
      {[
        { video: videoFile3, link: "/about" },
        { video: videoFile1, link: "/blog" },
        { video: videoFile4, link: "/careers" },
        { video: videoFile2, link: "/contact" },
      ].map((item, index) => (
        <VideoWrapper key={index} onClick={() => handleNavigation(item.link)}>
          <StyledVideo
            ref={videoRefs[index]}
            src={item.video}
            muted
            loop
            playsInline
            autoPlay
          />
        </VideoWrapper>
      ))}
    </VideoContainer>
  );
};

export default Video2;