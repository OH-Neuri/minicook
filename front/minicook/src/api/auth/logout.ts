// 쿠키 만료 시간을 과거로 설정하여 쿠키 삭제
function deleteCookie(cookieName: string) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/**
 * 인증 API(로그아웃)
 */
const logout = () => {
  localStorage.clear();
  deleteCookie("a_token");
  deleteCookie("r_token");
  window.location.href = "/login";
};

export default logout;
