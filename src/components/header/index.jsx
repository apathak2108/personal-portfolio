import React, { useState } from "react";
import ProfilePic from "../../assets/profile_pic.png";
import {
  StyledHeader,
  StyledHeaderLeftPortion,
  StyledHeaderRightPortion,
  StyledImage,
  StyledTitle,
} from "./header.styled";
import { HEADER_TITLES, STRINGS } from "../../constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const titles = Object.values(HEADER_TITLES);
  const [activeTitle, setActiveTitle] = useState(titles[0]);
  const handleTitleClick = (title) => {
    const navigateToPage = `/${title.toLowerCase()}`;
    setActiveTitle(title);
    navigate(navigateToPage, { replace: true });
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
