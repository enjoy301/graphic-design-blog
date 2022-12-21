import React from "react";
import { NavLink } from "react-router-dom";
import home_icon from "../images/home-icon.png";
import "./post.css";
import post_image from "../images/post-image.png";

export default function Post() {
  return (
    <div className="post_container">
      <div className="post_header">
        <p>Seobin Yoon</p>
        <NavLink
          to="/"
          style={{
            display: "block",
            marginLeft: "auto",
            width: "auto",
            height: "60%",
          }}
        >
          <img
            src={home_icon}
            alt="home"
            style={{ width: "auto", height: "100%" }}
          />
        </NavLink>
      </div>
      <div className="abstract">
        <div style={{ margin: "30px" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Title</p>
          <p>2021.01.01</p>
        </div>
        <div style={{ margin: "30px 30px 30px auto" }}>
          <p>SK 인천</p>
          <p>인턴</p>
          <p>Seobin Yoon</p>
        </div>
      </div>
      <div className="article">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </p>
        <img
          src={post_image}
          alt="post_image"
          style={{ width: "100%", height: "auto" }}
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </p>
        <img
          src={post_image}
          alt="post_image"
          style={{ width: "100%", height: "auto" }}
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </p>
        <img
          src={post_image}
          alt="post_image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
