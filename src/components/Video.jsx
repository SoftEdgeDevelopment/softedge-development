import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import videoFile from "../pages/assets/video.mp4"; // ✅ Using your original path

// Main container ensures full width and perfect centering
const VideoContainer = styled.div`
  width: 100vw; // Full width of screen
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

// Wrapper with a fully rounded gradient border
const VideoWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  border-radius: 20px;
  padding: 6px; // Border thickness
  background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

// Video styling ensuring full visibility and centering
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 14px;
  display: block;
  object-fit: contain; // Ensures full visibility (NO zoom or cropping)
  pointer-events: none;
`;

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25; // Set playback speed to 1.2x
    }
  }, []);

  return (
    <VideoContainer>
      <VideoWrapper>
        <StyledVideo ref={videoRef} src={videoFile} autoPlay loop muted playsInline />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default Video;