import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 60vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mobile} {
    width: 95vw;
    height: 95vh;
  }

  @media ${(props) => props.theme.desktop} {
    width: 1000px;
    height: 750px;
    margin: calc((100vh - 750px) / 2) auto;
  }
`;

export const Header = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 0 20px;

  @media ${(props) => props.theme.desktop} {
    height: 65px;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 36px;
  font-weight: bold;
  outline: none;
  padding: 0;

  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
  }
`;

export const Body = styled.div`
  display: flex;
  height: 84%;
  margin: 5px 20px;

  @media ${(props) => props.theme.desktop} {
    height: 596px;
  }
`;

export const MarkdownInput = styled.textarea`
  width: 100%;
  min-height: 100%;
  border: none;
  font-size: 20px;
  resize: none;
  outline: none;
  padding: 0;
`;

export const Footer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 2px solid black;

  @media ${(props) => props.theme.desktop} {
    height: 65px;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  font-weight: bold;
`;
