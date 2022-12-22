import home_icon from "../images/home-icon.png";
import * as S from "../components/Post/style";
import { MarkdownRenderer } from "../components/Post/markdown-renderer";

export default function Post() {
  const markdown = `
  # Hello,sdfworld!abcdefghijklmnopqrstuvwxyzabcdefsdfa

  ![Github_Logo](https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg)  

  This is my first blog post.
  I hope you like it!

  ## This is a subtitle
  ### This is a smaller subtitle

  * kiki1
  * kiki2
  
  # asdf

  # asdf
  # asdf
  # asdf
  # asdf
  # asdf
  # asdf
  # asdf
  `;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Seobin Yoon</S.HeaderText>
        <S.HeaderLink to="/">
          <S.HeaderIcon src={home_icon} alt="home" />
        </S.HeaderLink>
      </S.Header>
      <S.AbstractBox>
        <S.AbstractArticleBox>
          <S.AbstractTitle>Title</S.AbstractTitle>
          <S.AbstractDate>2021.01.01</S.AbstractDate>
        </S.AbstractArticleBox>
        <S.AbstractAuthorBox>
          <S.AbstractAuthorText>SK 인천</S.AbstractAuthorText>
          <S.AbstractAuthorText>인턴</S.AbstractAuthorText>
          <S.AbstractAuthorText>Seobin Yoon</S.AbstractAuthorText>
        </S.AbstractAuthorBox>
      </S.AbstractBox>
      <S.Article>
        <MarkdownRenderer>{markdown}</MarkdownRenderer>
      </S.Article>
    </S.Container>
  );
}
