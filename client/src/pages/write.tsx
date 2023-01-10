import * as S from "../components/Write/style";
import { usePost } from "../hooks/usePost";

export default function Write() {
  const [
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handlePaste,
    handleClick,
  ] = usePost();

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
          onPaste={handlePaste}
          placeholder="마크다운을 입력하세요."
        />
      </S.Body>
      <S.Footer>
        <S.SubmitButton onClick={handleClick}>작성하기</S.SubmitButton>
      </S.Footer>
    </S.Container>
  );
}
