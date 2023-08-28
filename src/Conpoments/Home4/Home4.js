import React from "react";
import "./Home4.css";
import patients from "../../Asserts/patients.jpg";

const Home4 = () => {
  return (
    <div className="parent">
      <div className="child4">
        <div className="text">
          {" "}
          <h1> Patient's Questions</h1>
          <p>
            Have a question about your medical case? Get expert answers and
            advice from our community of doctors and healthcare professionals.
            Browse through previously asked questions or post your own for
            personalized responses.owledge among medical professionalssionals
          </p>
        </div>
      </div>
      <div className="child4">
        <div
          style={{
            backgroundImage: `url(${patients})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            height: "600px",
            opacity: "40%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home4;
