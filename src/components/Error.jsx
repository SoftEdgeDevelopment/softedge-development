import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: #4c1d95;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const GoHomeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: #4c1d95;
  border: 2px solid;
  border-image: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c) 1;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #4c1d95, #9d174d, #ea580c);
    color: white;
    border-color: white;
  }
`;

const Error = () => {
  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <ErrorTitle>404 Not Found</ErrorTitle>
      <ErrorMessage>Oops! The page you are looking for does not exist.</ErrorMessage>
      <GoHomeButton onClick={() => navigate("/")}>Go Home</GoHomeButton>
    </ErrorWrapper>
  );
};

export default Error;