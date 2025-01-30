import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import videoFile1 from "../pages/assets/video2.mp4"; // ✅ First video
import videoFile2 from "../pages/assets/video3.mp4"; // ✅ Second video

// Container for the videos with grid layout
const VideoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns for desktop
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack on mobile
    gap: 1.5rem;
  }
`;

// Wrapper for each video with gradient border
const VideoWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  padding: 6px; // Border thickness
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer; // ✅ Makes it clear it's clickable

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

// Video styling ensuring full visibility
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 14px;
  display: block;
  object-fit: cover; // Ensures full visibility without distortion
  pointer-events: none;
`;

const Video2 = () => {
  const navigate = useNavigate();
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    if (videoRef1.current) videoRef1.current.playbackRate = 1.25; // Speed adjustment for video 1
    if (videoRef2.current) videoRef2.current.playbackRate = 1.25; // Speed adjustment for video 2
  }, []);

  return (
    <VideoContainer>
      {/* First Video (Navigates to Blog) */}
      <VideoWrapper onClick={() => navigate("/blog")}>
        <StyledVideo ref={videoRef1} src={videoFile1} autoPlay loop muted playsInline />
      </VideoWrapper>

      {/* Second Video (Navigates to Contact) */}
      <VideoWrapper onClick={() => navigate("/contact")}>
        <StyledVideo ref={videoRef2} src={videoFile2} autoPlay loop muted playsInline />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default Video2;