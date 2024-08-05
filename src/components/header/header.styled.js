import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 68px;
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  top: 0;
  position: fixed;
  justify-content: space-between;
`;

export const StyledImage = styled.img`
  height: 60px;
`;

export const StyledHeaderLeftPortion = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  margin-left: 1.125rem;
  font-weight: 600;
  font-size: 1.125rem;
  gap: 0.625rem;
`;

export const StyledHeaderRightPortion = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-right: 2.5rem;
  align-items: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1rem;
  width: 35%;
  gap: 10px;
  justify-content: space-evenly;
  min-width: 320px;
`;

export const StyledTitle = styled.span`
  height: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "4px solid grey" : "none")};

  &:hover {  
    border-bottom: 4px solid grey;
  }
`;
