import React from "react";
import { StyledButton } from "./button.styled";

export const Button = (name, onClick) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};
