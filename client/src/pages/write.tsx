import { ChangeEvent, useState } from "react";
import * as S from "../components/Write/style";

export default function Write() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleClick = () => {
    console.log(`${title} ${body}`);
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
          value={body}
          onChange={handleBodyChange}
          placeholder="마크다운을 입력하세요."
        />
      </S.Body>
      <S.Footer>
        <S.SubmitButton onClick={handleClick}>작성하기</S.SubmitButton>
      </S.Footer>
    </S.Container>
  );
}
