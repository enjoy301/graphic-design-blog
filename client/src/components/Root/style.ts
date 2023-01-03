import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  height: 85vh;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
  margin: auto;

  @media ${(props) => props.theme.mobile} {
    width: 95vw;
    height: auto;
    min-height: 95vh;
    margin: 20px 0;
  }
`;

export const Header = styled.div`
  padding: 0 20px;
  height: 8%;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    height: 60px;
    font-size: 25px;
    padding: 0 13px;
  }
`;

export const Body = styled.div`
  display: flex;
  // height: 92%;
  width: 100%;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
  }

  @media ${(props) => props.theme.desktop} {
    height: 92%;
  }
`;

export const SideBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  border-top: 2px solid black;

  @media ${(props) => props.theme.mobile} {
    aspect
  }

  @media ${(props) => props.theme.desktop} {
    aspect-ratio: 1;
  }
`;

export const HeaderText = styled.p`
  margin: 0;
`;

export const HeaderIconBox = styled.div`
  display: flex;
  margin-left: auto;
  width: auto;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    width: 100px;
    height: 30px;
    flex-direction: row;
  }
`;

export const HeaderLink = styled(NavLink)`
  width: 40px;
  height: 40px;
  margin-left 10px;

  @media ${(props) => props.theme.mobile} {
    width: 35px;
    height: 35px;
  }
`;

export const HeaderIcon = styled.img`
  width: 40px;
  height: 40px;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
    item-align: center;
    margin: 0;
  }
`;

export const ProfileBox = styled.div`
  aspect-ratio: 1;
  border-width: 3px 3px 3px 0;
  border-color: black;
  border-style: solid;
  display: flex;

  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;

export const ProfileImage = styled.img`
  width: 80%;
  height: 80%;
  margin: auto;

  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 90%;
    aspect-ratio: 1;
  }
`;

export const ExtraBox = styled.div`
  display: flex;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    width: 50%;
    border-top: 1px solid black;
  }

  @media ${(props) => props.theme.desktop} {
    flex: 1;
    flex-direction: column;
  }
`;

export const MenuBox = styled.div`
  flex: 1;
  border-right: 1px solid black;
  font-size: 20px;

  @media ${(props) => props.theme.mobile} {
    flex: 0;
    border-right: none;
  }
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

  @media ${(props) => props.theme.mobile} {
    height: 100%;
    border: none;
  }

  @media ${(props) => props.theme.desktop} {
    height: 80px;
  }
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
