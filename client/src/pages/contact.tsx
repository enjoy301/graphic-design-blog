import styled from "styled-components";

const MainTitle = styled.h1`
  color: black;
`;

const PlainText = styled.p`
  color: black;
`;

export default function Contact() {
  return (
    <div style={{ margin: "10px" }}>
      <MainTitle>Graphic Designer</MainTitle>
      <PlainText>Mail</PlainText>
      <PlainText>plumplum010101@gmail.com</PlainText>
    </div>
  );
}
