import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 70vw;
  min-width: 250px;
  border: 5px solid black;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  font-weight: bold;
  font-size: 36px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 36px;
  font-weight: bold;
  outline: none;
`;

export const Body = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
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
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 2px solid black;
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