import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 10% auto;
  min-height: 85vh;
  width: 70vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
`;

export const Header = styled.div`
  padding: 0 20px;
  height: 70px;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
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

export const AbstractBox = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const AbstractArticleBox = styled.div`
  margin: 30px;
`;

export const AbstractTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const AbstractDate = styled.p``;

export const AbstractAuthorBox = styled.div`
  margin: 30px 30px 30px auto;
`;

export const AbstractAuthorText = styled.p``;

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
