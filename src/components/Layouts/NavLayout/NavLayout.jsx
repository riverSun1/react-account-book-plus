import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../api/auth";
import {
  Bar,
  Button,
  Img,
  Info,
  LinkContainer,
  StLink,
} from "./NavLayout.styled";

const NavLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // 로그인 화면에서는 로그인이 되었는지 안되었는지 확인할 필요가 없다.
  // 그래서 원래 App.jsx에 있던 코드였지만 여기로 옮김
  // 새로고침해도 로그인 유지
  useEffect(() => {
    getUserInfo().then((res) => {
      // console.log("현재 로그인된 유저가 있나요?", res);
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
        // console.log("user => ", user); // userId, nickname, avatar
      } else {
        handleLogout();
      }
    });
  }, [location.state?.updatedProfile]);

  useEffect(() => {
    //console.log("user => ", user); // user 상태가 업데이트될 때마다 확인
  }, [user]); // user 상태가 업데이트될 때마다 useEffect 실행

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.clear();
    alert("로그아웃 되었습니다.");
  };

  return (
    <div>
      <Bar>
        <LinkContainer>
          <StLink to="/">Home</StLink>
          <StLink to="/profile">My Profile</StLink>
        </LinkContainer>
        <div>
          {/* 로그인일 때만 보여줌 */}
          {user && (
            <Info>
              <Img src={user.avatar} />
              <div>{user.nickname} 님</div>
            </Info>
          )}
        </div>
        <Button onClick={handleLogout}>로그아웃</Button>
      </Bar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavLayout;
