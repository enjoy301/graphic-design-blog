import {
  ChangeEvent,
  ChangeEventHandler,
  ClipboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

export function usePost(): [
  string,
  string,
  ChangeEventHandler,
  ChangeEventHandler,
  ClipboardEventHandler,
  MouseEventHandler
] {
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
                `![이미지](http://localhost:4566/${data})` +
                textAfterCursorPosition
            );
          });
      }
    }
  };

  const handleClick = () => {
    mutation.mutate({ postId, title, subtitle: "temp subtitle", content });
  };

  return [
    title,
    content,
    handleTitleChange,
    handleContentChange,
    handlePaste,
    handleClick,
  ];
}
