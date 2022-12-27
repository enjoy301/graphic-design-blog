import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 70vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
  margin: auto;
`;

export const Header = styled.div`
  padding: 0 20px;
  height: 8%;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  height: 92%;
  width: 100%;
`;

export const SideBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  aspect-ratio: 1;
  border-top: 2px solid black;
`;

export const HeaderText = styled.p``;

export const HeaderLink = styled(NavLink)`
  display: block;
  margin-left: auto;
  width: auto;
  height: 60%;
`;

export const HeaderIcon = styled.img`
  width: auto;
  height: 100%;
`;

export const ProfileBox = styled.div`
  aspect-ratio: 1;
  border-width: 3px 3px 3px 0;
  border-color: black;
  border-style: solid;
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 80%;
  height: 80%;
  margin: auto;
`;

export const MenuBox = styled.div`
  flex: 1;
  border-right: 1px solid black;
  font-size: 20px;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  height: 40px;
  item-align: center;
  align-items: center;
  &.active {
    background-color: rgba(242, 228, 191, 0.79);
  }
`;

export const MenuText = styled.div`
  margin: 0 0 0 10px;
`;

export const LogoBox = styled.div`
  height: 10%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Logo = styled.p`
  margin: auto;
  padding: 5% 10%;
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 100%;
`;
