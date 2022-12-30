import profile_image from "../images/profile.png";
import home_icon from "../images/home-icon.png";
import { Outlet } from "react-router-dom";
import * as S from "../components/Root/style";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Seobin Yoon</S.HeaderText>
        <S.HeaderIconBox>
          {isAdmin && (
            <S.HeaderLink to="/write">
              <S.HeaderIcon src={home_icon} alt="write" />
            </S.HeaderLink>
          )}
          <S.HeaderLink to="/">
            <S.HeaderIcon src={home_icon} alt="home" />
          </S.HeaderLink>
        </S.HeaderIconBox>
      </S.Header>
      <S.Body>
        <S.SideBar>
          <S.ProfileBox>
            <S.ProfileImage src={profile_image} alt="profile" />
          </S.ProfileBox>
          <S.MenuBox>
            <S.MenuLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <S.MenuText>It's me</S.MenuText>
            </S.MenuLink>
            <S.MenuLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <S.MenuText>Contact</S.MenuText>
            </S.MenuLink>
          </S.MenuBox>
          <S.LogoBox>
            <S.Logo>LOGO</S.Logo>
          </S.LogoBox>
        </S.SideBar>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Body>
    </S.Container>
  );
}
