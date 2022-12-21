import styled from "styled-components";

const MainTitle = styled.h1`
  color: black;
`;

const PlainText = styled.p`
  color: black;
`;

export default function About() {
  return (
    <div style={{ margin: "10px" }}>
      <MainTitle>Seobin Yoon</MainTitle>
      <PlainText>10. 09. 2001</PlainText>
      <PlainText>Visual Design, Pusan National University</PlainText>
      <PlainText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.
      </PlainText>
    </div>
  );
}
