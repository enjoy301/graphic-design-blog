import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "../components/Write/style";

export default function Write() {
  const { postId } = useParams<{ postId?: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation(
    (data: {
      postId?: string;
      title: string;
      subtitle: string;
      content: string;
    }) => {
      if (data.postId) {
        return fetch(`http://localhost:3001/api/posts/${data.postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) =>
            res.json().then((data) => ({ status: res.status, data }))
          )
          .then((obj) => {
            if (obj.status === 200) {
              window.location.href = "/";
            } else {
              alert("서버 에러");
            }
          });
      } else {
        return fetch("http://localhost:3001/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) =>
            res.json().then((data) => ({ status: res.status, data }))
          )
          .then((obj) => {
            if (obj.status === 201) {
              window.location.href = "/";
            } else {
              alert("서버 에러");
            }
          });
      }
    }
  );

  useEffect(() => {
    if (postId) {
      fetch(`http://localhost:3001/api/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
        });
    }
  }, [postId]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePaste = (event: any) => {
    const pasteData = event.clipboardData;

    for (const dataTransferItem of pasteData.items) {
      if (dataTransferItem.type.match("^image/")) {
        const file = dataTransferItem.getAsFile();
        const formData = new FormData();
        formData.append("image", file);

        fetch("http://localhost:3001/api/image", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            let cursorPosition = event.target.selectionStart;

            let textBeforeCursorPosition = content.substring(0, cursorPosition);
            let textAfterCursorPosition = content.substring(
              cursorPosition,
              content.length
            );

            setContent(
              textBeforeCursorPosition +
                "![이미지]('https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png')" +
                textAfterCursorPosition
            );
          });
      }
    }
  };

  const handleClick = () => {
    mutation.mutate({ postId, title, subtitle: "temp subtitle", content });
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
