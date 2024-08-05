import React from "react";
import { StyledLayout, StyledLayoutContainer } from "./layout.styled";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
      <StyledLayoutContainer>{children}</StyledLayoutContainer>
    </StyledLayout>
  );
};

export default Layout;
