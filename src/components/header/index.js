import React from "react";
import ProfilePic from "../../images/profile_pic.png";
import {
  StyledHeader,
  StyledHeaderLeftPortion,
  StyledHeaderRightPortion,
} from "./header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLeftPortion>
        <img src={ProfilePic} style={{ height: "60px" }} />
        <span>ANANYA PATHAK</span>
      </StyledHeaderLeftPortion>
      <StyledHeaderRightPortion>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PROJECTS</span>
        <span>CONTACT</span>
      </StyledHeaderRightPortion>
    </StyledHeader>
  );
};

export default Header;
