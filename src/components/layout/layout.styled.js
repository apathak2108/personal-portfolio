import styled from "styled-components";

export const StyledLayout = styled.main`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url(../assets/common-bg.svg);
  background-position: center;
`;

export const StyledLayoutContainer = styled.div`
  height: calc(100vh - 64px);
  top: 64px;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
