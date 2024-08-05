import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 12px;
  gap: 1.25rem;
  border-radius: 4px;

  @media (max-width: 710px) {
    display: none;
  }
`;

export const StyledIcon = styled.img`
  height: 36px;
  width: 36px;
  cursor: pointer;
`;
