import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import * as S from "../components/Write/style";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation(
    (data: { title: string; subtitle: string; content: string }) =>
      fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
  );

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    mutation.mutate({ title, subtitle: "temp subtitle", content });

    if (mutation.isSuccess) {
      alert("작성이 완료되었습니다.");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleInput
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요."
        />
      </S.Header>
      <S.Body>
        <S.MarkdownInput
          value={content}
          onChange={handleContentChange}
          placeholder="마크다운을 입력하세요."
        />
      </S.Body>
      <S.Footer>
        <S.SubmitButton onClick={handleClick}>작성하기</S.SubmitButton>
      </S.Footer>
    </S.Container>
  );
}
