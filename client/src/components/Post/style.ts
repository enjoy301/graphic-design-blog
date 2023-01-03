import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 70px auto;
  min-height: 85vh;
  width: 60vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;

  @media ${(props) => props.theme.mobile} {
    width: 95vw;
    height: auto;
    min-height: 95vh;
    margin: 20px 0;
  }

  @media ${(props) => props.theme.desktop} {
    width: 1000px;
    height: 750px;
    margin: calc((100vh - 750px) / 2) auto;
  }
`;

export const Header = styled.div`
  padding: 0 20px;
  height: 65px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;

  @media ${(props) => props.theme.mobile} {
    padding: 0 13px;
  }
`;

export const HeaderText = styled.p`
  font-size: 36px;
  font-weight: bold;

  @media ${(props) => props.theme.mobile} {
    font-size: 25px;
  }
`;

export const HeaderIconBox = styled.div`
  margin-left: auto;
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  width: 50px;
  height: 40px;

  @media ${(props) => props.theme.mobile} {
    margin: auto 0;
    height: 35px;
  }
`;

export const HeaderIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;

  @media ${(props) => props.theme.mobile} {
    width: 35px;
    height: 35px;
    margin: auto 0 auto 7px;
  }
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

  @media ${(props) => props.theme.mobile} {
    margin-left: 20px;
  }
`;

export const AbstractTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;

  @media ${(props) => props.theme.mobile} {
    font-size: 25px;
  }
`;

export const AbstractDate = styled.p`
  margin-top: 15px;

  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
  }
`;

export const AbstractAuthorBox = styled.div`
  margin: 0 30px 0 auto;

  @media ${(props) => props.theme.mobile} {
    margin: 0 20px 0 auto;
  }
`;

export const AbstractAuthorText = styled.p`
  margin: 6px 0 6px 0;
  font-weight: light;

  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
  }
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
