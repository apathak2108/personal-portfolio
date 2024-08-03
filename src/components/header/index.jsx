import React, { useState } from "react";
import ProfilePic from "../../images/profile_pic.png";
import {
  StyledHeader,
  StyledHeaderLeftPortion,
  StyledHeaderRightPortion,
  StyledImage,
  StyledTitle,
} from "./header.styled";
import { HEADER_TITLES, STRINGS } from "../../constants";

const Header = () => {
  const titles = Object.values(HEADER_TITLES);
  const [activeTitle, setActiveTitle] = useState(titles[0]);

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  return (
    <StyledHeader>
      <StyledHeaderLeftPortion>
        <StyledImage src={ProfilePic} alt="profile-pic" />
        <span>{STRINGS.NAME}</span>
      </StyledHeaderLeftPortion>
      <StyledHeaderRightPortion>
        {titles.map((text) => (
          <StyledTitle
            key={text}
            isActive={activeTitle === text}
            onClick={() => handleTitleClick(text)}
          >
            {text}
          </StyledTitle>
        ))}
      </StyledHeaderRightPortion>
    </StyledHeader>
  );
};

export default Header;
