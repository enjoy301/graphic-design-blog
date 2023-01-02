import styled from "styled-components";

export const Container = styled.div`
  @media ${(props) => props.theme.mobile} {
    margin: 0 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;
