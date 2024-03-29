import axios, { AxiosInstance } from "axios";
import { refreshToken } from "./auth/refreshToken";

export const BACKEND_URL = "http://localhost:8080/api/";

const accessToken =
  typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;

// 로그인 후 사용할 axios객체 (토큰이 필요한 경우)
// baseURL, header 설정
export const authClient: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {
    Authorization: "Bearer " + accessToken || "",
  },
});

// 브라우저가 HTTP 요청을 할 때 해당 요청에 쿠키와 인증 정보를 함께 보냄
authClient.defaults.withCredentials = true;

// 응답코드가 403일 경우 토큰 재발급
authClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("interceptor:" + err.response.status);
    if (err.response.status === 403) refreshToken(`${BACKEND_URL}/user/auth`);
  }
);

// 로그인이 필요없는 axios객체 (토큰이 필요없는 경우)
// baseURL 설정
export const defaultClient: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
});
