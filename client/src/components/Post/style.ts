import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 70px auto;
  min-height: 85vh;
  width: 60vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
`;

export const Header = styled.div`
  padding: 0 20px;
  height: 65px;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const HeaderText = styled.p``;

export const HeaderIconBox = styled.div`
  // display: flex;
  margin-left: auto;
  width: auto;
  height: 60%;
`;

export const HeaderLink = styled(NavLink)``;

export const HeaderIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const AbstractBox = styled.div`
  width: 100%;
  height: 130px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const AbstractArticleBox = styled.div`
  margin-left 40px;
`;

export const AbstractTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const AbstractDate = styled.p`
  margin-top: 15px;
`;

export const AbstractAuthorBox = styled.div`
  margin: 0 30px 0 auto;
`;

export const AbstractAuthorText = styled.p`
  margin: 6px 0 6px 0;
  font-weight: light;
`;

export const Article = styled.div`
  width: 100%;
  height: auto;
  overflow-y: scroll;
`;

export const ArticleText = styled.p`
  padding: 25px;
  font-size: 20px;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`;
