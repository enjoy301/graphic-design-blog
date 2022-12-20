import React from "react";
import "./home.css";
import profile_image from "../images/profile.png";

export default function Home() {
  return (
    <div className="container">
      <div className="header">Seobin Yoon</div>
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img
              src={profile_image}
              alt="profile"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="menu"></div>
          <div className="logo">Logo</div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}
