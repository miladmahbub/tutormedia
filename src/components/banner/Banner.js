import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h3 className="title">
            HOSPITAL PROVIDING
            </h3>
            <h1 className="title">
            TOTAL HEALTHCARE   <br /> SOLUTION
            </h1>
            <p className="text-white text-center mt-3">
            We at Medicare are always fully focused on helping your to overcame any 
            surgeon procedure with great commitment and easy recovery.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
