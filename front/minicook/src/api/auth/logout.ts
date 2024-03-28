// 로그아웃
export const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.href = "/login";
};
