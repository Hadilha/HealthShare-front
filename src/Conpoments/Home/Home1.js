import React from "react";
import bgimage from "../../Asserts/bgimage.png";
import "./Home1.css";
const Home1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        height: "800px",
      }}
    >
      <h1 className="title">
        Medical Cases and <br /> Q&A Platform
      </h1>
    </div>
  );
};

export default Home1;
