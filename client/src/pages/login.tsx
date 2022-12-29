import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import * as S from "../components/Login/style";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation((data: { id: string; password: string }) =>
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .then((obj) => {
        if (obj.status === 200) {
          localStorage.setItem("token", obj.data.token);
          window.location.href = "/";
        } else if (obj.status === 401) {
          alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        } else if (obj.status === 500) {
          alert("서버 에러");
        }
      })
  );

  const handleClick = () => {
    mutation.mutate({ id, password });
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <S.Container>
      <S.Input value={id} onChange={handleIdChange}></S.Input>
      <S.Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      ></S.Input>
      <S.Button onClick={handleClick}>로그인</S.Button>
    </S.Container>
  );
}
