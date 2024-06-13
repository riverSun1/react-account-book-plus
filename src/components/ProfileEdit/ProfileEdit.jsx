import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, updateProfile } from "../../api/auth";
import { Button, Container, Div, Form, Input } from "./ProfileEdit.styled";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState({ nickname: "" });

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({ nickname: res.nickname });
      }
    });
  }, []);

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      // 유저 상태 업데이트
      setUser({ nickname });

      alert("프로필 변경이 완료되었습니다.");

      // 홈으로 리다이렉트하며 상태 전달
      navigate("/", { state: { updatedProfile: true } });
    }
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>프로필 수정</h3>
        <Div>
          <label htmlFor="nickname">닉네임</label>
          <Input
            id="nickname"
            type="text"
            minLength="1"
            maxLength="10"
            placeholder="닉네임"
            value={user.nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <label htmlFor="avatar">프로필 이미지</label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
        </Div>
      </Form>
    </Container>
  );
};

export default ProfileEdit;
