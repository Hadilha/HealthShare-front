import React from "react";
import "./Home3.css";
import doctors from "../../Asserts/doctors.jpg";

const Home3 = () => {
  return (
    <div className="parent">
      <div className="child">
        <div
          style={{
            backgroundImage: `url(${doctors})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            height: "600px",
            opacity: "40%",
          }}
        ></div>
      </div>
      <div className="child">
        <div className="text">
          {" "}
          <h1>Doctor's Medical Cases</h1>
          <p>
            The Doctor's Medical Cases section of our platform provides an
            extensive collection of real-life medical cases encountered by
            doctors. these cases are valuable resources for learning and sharing
            knowledge among medical professionalssionals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home3;
