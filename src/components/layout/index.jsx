import React from "react";
import { StyledLayout } from "./layout.styled";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Sidebar />
    </StyledLayout>
  );
};

export default Layout;
