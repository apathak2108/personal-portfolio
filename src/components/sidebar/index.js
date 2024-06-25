import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledSidebar } from "./sidebar.styled";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/ananya-pathak-149a16204/";
  };
  const handleGithubClick = () => {
    window.location.href = "https://www.github.com/apathak2108";
  };
  const handleLeetcodeClick = () => {
    window.location.href = "https://leetcode.com/u/coderanany21/";
  };
  const handleHackerrankClick = () => {
    window.location.href =
      "https://www.hackerrank.com/profile/013_AnanyaPathak";
  };
  return (
    <StyledSidebar>
      <img
        height="36px"
        width="36px"
        src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
        onClick={handleLinkedinClick}
        style={{ cursor: "pointer" }}
      />
      <img
        height="36px"
        width="36px"
        src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
        onClick={handleGithubClick}
        style={{ cursor: "pointer" }}
      />
      <img
        height="36px"
        width="36px"
        src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000"
        onClick={handleLeetcodeClick}
        style={{ cursor: "pointer" }}
      />
      <img
        height="36px"
        width="36px"
        src="https://img.icons8.com/?size=100&id=OUPsEPLKIebZ&format=png&color=000000"
        onClick={handleHackerrankClick}
        style={{ cursor: "pointer" }}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
