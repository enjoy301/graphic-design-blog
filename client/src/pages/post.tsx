import home_icon from "../images/home-icon.png";
import post_image from "../images/post-image.png";
import * as S from "../components/Post/style";

export default function Post() {
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
        <S.ArticleText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </S.ArticleText>
        <S.ArticleImage src={post_image} alt="post_image" />
        <S.ArticleText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </S.ArticleText>
        <S.ArticleImage src={post_image} alt="post_image" />
        <S.ArticleText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, wh
        </S.ArticleText>
        <S.ArticleImage src={post_image} alt="post_image" />
      </S.Article>
    </S.Container>
  );
}
