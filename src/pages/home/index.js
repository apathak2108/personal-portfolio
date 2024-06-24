import React from "react";
import Header from "../../components/header";
import { StyledMainDiv } from "../../components/mainDiv";

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledMainDiv>
        <h1 style={{ letterSpacing: "2px", fontSize: "38px" }}>
          HEY, I'M ANANYA PATHAK
        </h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web
        </p>
        <p>Applications that leads to the success of overall product</p>
        <button
          style={{
            height: "40px",
            width: "178px",
            backgroundColor: "#ffd700",
            border: "none",
            borderRadius: '4px',
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "2px",
            cursor: "poiner",
            boxShadow:
              "-6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2)",
          }}
        >
          PROJECTS
        </button>
      </StyledMainDiv>
    </>
  );
};

export default HomePage;
