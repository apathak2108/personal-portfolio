import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeAdaptive from "./pages/home";
import AboutAdaptive from "./pages/about";
import ContactAdaptive from "./pages/contact";
import ProjectsAdaptive from "./pages/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeAdaptive />} />
        <Route path="/about" element={<AboutAdaptive />} />
        <Route path="/contact" element={<ContactAdaptive />} />
        <Route path="/projects" element={<ProjectsAdaptive />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
