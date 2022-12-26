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
            <S.PostBox src="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg">
              <S.Title>{post.title}</S.Title>
              <S.Subtitle>{post.content}</S.Subtitle>
            </S.PostBox>
          </S.PostLink>
        ))}
    </S.PostsContainer>
  );
}
