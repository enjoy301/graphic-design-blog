import home_icon from "../images/home-icon.png";
import * as S from "../components/Post/style";
import { MarkdownRenderer } from "../components/Post/markdown-renderer";
import { useQuery } from "react-query";
import { useParams } from "react-router";

export default function Post() {
  const { postId } = useParams<{ postId: string }>();
  const { status, data } = useQuery("post", () =>
    fetch(`http://localhost:3001/api/posts/${postId}`).then((res) => res.json())
  );

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Seobin Yoon</S.HeaderText>
        <S.HeaderLink to="/">
          <S.HeaderIcon src={home_icon} alt="home" />
        </S.HeaderLink>
      </S.Header>
      {status === "success" && (
        <>
          <S.AbstractBox>
            <S.AbstractArticleBox>
              <S.AbstractTitle>{data.title}</S.AbstractTitle>
              <S.AbstractDate>{data.updatedAt.split("T")[0]}</S.AbstractDate>
            </S.AbstractArticleBox>
            <S.AbstractAuthorBox>
              <S.AbstractAuthorText>SK 인천</S.AbstractAuthorText>
              <S.AbstractAuthorText>인턴</S.AbstractAuthorText>
              <S.AbstractAuthorText>Seobin Yoon</S.AbstractAuthorText>
            </S.AbstractAuthorBox>
          </S.AbstractBox>
          <S.Article>
            <MarkdownRenderer>{data.content}</MarkdownRenderer>
          </S.Article>
        </>
      )}
    </S.Container>
  );
}
