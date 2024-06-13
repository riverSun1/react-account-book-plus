import axios from "axios";

const BASE_URL = import.meta.env.VITE_AUTH_URL;

// 회원가입
export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(BASE_URL + "/register", {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    //console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 로그인
export const login = async ({ id, password }) => {
  try {
    //const response = await axios.post(BASE_URL + "/login?expiresIn=20m", {
    const response = await axios.post(BASE_URL + "/login", {
      id: id,
      password: password,
    });

    // 로컬스토리지에 accessToken 저장
    localStorage.setItem("accessToken", response.data.accessToken);
    // console.log("response : ", response);
    return response.data;
  } catch (error) {
    //console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

// 사용자 정보 가져오기
export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(BASE_URL + "/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert("AccessToken이 만료되었습니다.");
      localStorage.clear();
    }
  }
};

// 프로필 업데이트
export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(BASE_URL + "/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      //console.log(error);
    }
  }
};
