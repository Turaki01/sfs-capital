import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1.5rem;
  position: relative;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  margin-bottom: 2rem;
  cursor: pointer;
`;

interface CardProps {
  children: React.ReactNode;
  height?: string;
  animationClass?: string
}

const CardComponent: React.FC<CardProps> = ({ children, height, animationClass }) => {
  return <CardContainer className={animationClass}>{children}</CardContainer>;
};

export default CardComponent;
