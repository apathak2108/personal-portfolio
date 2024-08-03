import React from "react";
import { StyledIcon, StyledSidebar } from "./sidebar.styled";
import { icons } from "../../constants";

const Sidebar = () => {
  const handleRedirection = (url) => {
    window.location.href = url;
  };
  return (
    <StyledSidebar>
      {icons.map((icon) => {
        return (
          <StyledIcon
            src={icon.src}
            onClick={() => handleRedirection(icon.url)}
          />
        );
      })}
    </StyledSidebar>
  );
};

export default Sidebar;
