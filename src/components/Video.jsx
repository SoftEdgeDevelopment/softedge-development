import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import videoFile from "../../public/assets/video1.mp4"; // ✅ Using your original path

// Main container ensures full width and perfect centering
const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

// Wrapper with a fully rounded grayscale gradient border
const VideoWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  border-radius: 20px;
  padding: 6px; /* ✅ Border thickness */
  background: linear-gradient(90deg, black, grey, white); /* ✅ Updated to grayscale */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    padding: 4px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 3px;
  }
`;

// Video styling with **PERMANENT black and white effect**
const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 14px;
  display: block;
  object-fit: cover;
  pointer-events: none;
  filter: grayscale(100%); /* ✅ Makes video permanently black and white */
`;

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25; // ✅ Set playback speed to 1.25x
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