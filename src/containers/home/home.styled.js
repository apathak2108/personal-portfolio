import styled, { keyframes } from "styled-components";
import { StyledButton } from "../../components/button/button.styled";

export const StyledHomeContainer = styled.main`
  text-align: center;
  padding: 24px 212px 24px 212px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 24px;
`;

export const StyledNameContainer = styled.article`
  display: inline-block;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUpFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHomeText = styled.section`
  line-height: 32px;
  font-family: system-ui;
  animation: ${fadeIn} 4s ease-out forwards;
`;

export const StyledHomeButton = styled(StyledButton)`
  animation: ${slideUpFadeIn} 2s ease-out forwards;
`;
