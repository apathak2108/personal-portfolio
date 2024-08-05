import React, { useEffect, useState } from "react";
import {
  StyledHomeButton,
  StyledHomeContainer,
  StyledHomeText,
  StyledNameContainer,
} from "./home.styled";
import { STRINGS } from "../../constants";

const HomeContainer = () => {
  const [name, setName] = useState("");
  const nameText = "ANANYA PATHAK";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setName((prevName) => {
        const newName = nameText.substring(0, index + 1);
        index += 1;
        if (index >= nameText.length) {
          clearInterval(interval);
        }
        return newName;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHomeContainer>
      <StyledNameContainer>
        {STRINGS.HOME_HEADING}
        {name}
      </StyledNameContainer>
      <StyledHomeText>{STRINGS.HOME_TEXT}</StyledHomeText>
      <StyledHomeButton>PROJECTS</StyledHomeButton>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
