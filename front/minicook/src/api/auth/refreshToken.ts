import axios from "axios";

// 토큰 재발급
export const refreshToken = async (api:string) => {
  await axios
    .post(
      api,
      {},
      {
        headers: {
          "refresh-token": localStorage.getItem("refresh_token") || "",
        },
      }
    )
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      // alert('인증 갱신 완료.');
      window.location.href = "/";
      localStorage.setItem("isLogin", "true");
    })
    .catch((err) => {
      console.log(err);
      alert("인증 갱신에 실패했습니다! 로그아웃 후 다시 로그인해주세요.");
    });
};
