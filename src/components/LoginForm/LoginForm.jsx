import { useState } from "react";
import { register } from "../../api/auth";
// import useAuthStore from "../../zustand/authStore";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { Button, Container, Div, Form, Input, Span } from "./LoginForm.styled";

const LoginForm = () => {
  // const signin = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [newUser, setNewUser] = useState(false);

  // 회원가입
  const handleRegister = async () => {
    //console.log("회원가입 요청 시작"); // 디버깅 로그
    //console.log("아이디: ", id, "비밀번호: ", password, "닉네임: ", nickname); // 입력값 출력

    if (id.length < 3 || id.length > 10) {
      alert("아이디는 3글자에서 10글자 이내로 입력해주세요.");
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert("패스워드는 4글자에서 15글자 이내로 입력해주세요.");
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로 입력해주세요.");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });

    if (response) {
      setPassword("");
      setNickname("");
      setId("");
      alert("회원가입이 완료되었습니다.");
      //console.log("회원가입 API 응답값 : ", response);
    } else {
      //console.log("회원가입 요청이 실패했습니다.");
    }
  };

  // 로그인
  const handleLogin = async () => {
    //console.log("로그인 요청 시작"); // 디버깅 로그
    //console.log("아이디: ", id, "비밀번호: ", password); // 입력값 출력

    // 로그인 처리
    const response = await login({ id: id, password: password });

    if (response) {
      //console.log("로그인 API 응답값 : ", response);
      alert("로그인 되었습니다.");
      navigate("/");
    } else {
      //console.log("로그인 요청이 실패했습니다.");
    }
  };

  const moveToLogin = () => {
    setNewUser(true);
    setPassword("");
    setNickname("");
    setId("");
  };

  const moveToRegister = () => {
    setNewUser(false);
    setPassword("");
    setNickname("");
    setId("");
  };

  return (
    <Container>
      {!newUser ? (
        <Form>
          <h3>회원가입</h3>
          <Div>
            <label htmlFor="id">아이디</label>
            <Input
              id="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="nickname">닉네임</label>
            <Input
              id="nickname"
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button onClick={handleRegister}>회원가입</Button>
            <p>
              이미 계정이 있으신가요?
              <Span onClick={moveToLogin}> 로그인</Span>
            </p>
          </Div>
        </Form>
      ) : (
        <Form>
          <h3>로그인</h3>
          <Div>
            <label htmlFor="id">아이디</label>
            <Input
              id="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>로그인</Button>
            <p>
              계정이 없으신가요?
              <Span onClick={moveToRegister}> 회원가입</Span>
            </p>
          </Div>
        </Form>
      )}
    </Container>
  );
};

export default LoginForm;
