import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  top: 0;
  position: sticky;
  justify-content: space-between;
`;

export const StyledHeaderLeftPortion = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  margin-left: 18px;
  font-weight: 600;
  font-size: 18px;
  gap: 10px;
`;

export const StyledHeaderRightPortion = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 40px;
  align-items: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 16px;
`;
