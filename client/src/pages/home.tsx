import * as S from "../components/Posts/style";
import { useQuery } from "react-query";

export default function Home() {
  const { status, data } = useQuery("posts", () =>
    fetch("http://localhost:3001/api/posts").then((res) => res.json())
  );

  return (
    <S.PostsContainer>
      {status === "success" &&
        data.map((post: any) => (
          <S.PostLink to={`/posts/${post.id}`} key={post.id}>
            <S.PostBox src={post.thumbnail}>
              <S.Title>{post.title}</S.Title>
              <S.Subtitle>{post.subtitle}</S.Subtitle>
            </S.PostBox>
          </S.PostLink>
        ))}
    </S.PostsContainer>
  );
}
