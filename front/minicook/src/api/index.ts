import axios, { AxiosInstance } from "axios";
import { refreshToken } from "./auth/refreshToken";

export const BACKEND_URL = "https://";

const accessToken =
  typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : null;

// 로그인 후 사용할 axios (토큰이 필요한 경우)
export const authClient: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {
    Authorization: "Bearer " + accessToken || "",
  },
});

authClient.defaults.withCredentials = true;

// 로그인이 필요없는 axios
export const defaultClient: AxiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
});

authClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("interceptor:" + err.response.status);
    if (err.response.status === 403) refreshToken(`${BACKEND_URL}/user/auth`);
  }
);
