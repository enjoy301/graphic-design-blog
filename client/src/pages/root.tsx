import "./root.css";
import profile_image from "../images/profile.png";
import home_icon from "../images/home-icon.png";
import MenuItem from "../components/menu-item";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <p>Seobin Yoon</p>
        <NavLink
          to="/"
          style={{
            display: "block",
            marginLeft: "auto",
            width: "auto",
            height: "60%",
          }}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img
            src={home_icon}
            alt="home"
            style={{ width: "auto", height: "100%" }}
          />
        </NavLink>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img
              src={profile_image}
              alt="profile"
              style={{ width: "80%", height: "80%", margin: "auto" }}
            />
          </div>
          <div className="menu">
            <MenuItem to="/about" content="It's me" />
            <MenuItem to="/contact" content="Contact" />
          </div>
          <div className="logo">
            <p className="logo__p">LOGO</p>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
