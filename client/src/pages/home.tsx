import "./home.css";
import profile_image from "../images/profile.png";
import home_icon from "../images/home-icon.png";
import MenuItem from "../components/menu-item";
import { Link } from "react-router-dom";
import Thumbnail from "../components/thumbnail";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <p>Seobin Yoon</p>
        <Link
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
        </Link>
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
          <Thumbnail
            to="/"
            imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
            title="원투쓰리포파입싯스"
            subtitle="나~~인텐! 딱 10cm만"
          />
          <Thumbnail
            to="/"
            imageUrl="www.naver.com"
            title="헤헤2"
            subtitle="마싯당2"
          />
          <Thumbnail
            to="/"
            imageUrl="www.naver.com"
            title="헤헤3"
            subtitle="마싯당3"
          />
          <Thumbnail
            to="/"
            imageUrl="www.naver.com"
            title="헤헤3"
            subtitle="마싯당3"
          />
          <Thumbnail
            to="/"
            imageUrl="www.naver.com"
            title="헤헤3"
            subtitle="마싯당3"
          />
        </div>
      </div>
    </div>
  );
}
