import React, { useState } from "react";
import ProfilePic from "../../images/profile_pic.png";
import { slide as Menu } from 'react-burger-menu'
import {
  StyledHeader,
  StyledHeaderLeftPortion,
  StyledHeaderRightPortion,
  StyledAnchor,
} from "./header.styled";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <StyledHeader>
      <StyledHeaderLeftPortion>
        <img src={ProfilePic} style={{ height: "60px" }} />
        <span>ANANYA PATHAK</span>
      </StyledHeaderLeftPortion>
      <StyledHeaderRightPortion>
        <Menu right width='280px'>
        <StyledAnchor id="home" href="#home">
          HOME
        </StyledAnchor>
        <StyledAnchor id="about" href="#about">
          ABOUT
        </StyledAnchor>
        <StyledAnchor id="projects" href="#projects">
          PROJECTS
        </StyledAnchor>
        </Menu>
        {/* <StyledAnchor id="contact" href="#contact">
          CONTACT
        </StyledAnchor> */}

      </StyledHeaderRightPortion>
    </StyledHeader>
  );
};

export default Header;


// top: 35px;
//     position: absolute;
//     background-color: darkcyan;
//     height: 25%;
//     width: 50%;
//     right: 0px;
//     display: flex;
//     flex-flow: column;
//     gap: 20px;
//     justify-content: center;
//     align-items: center;