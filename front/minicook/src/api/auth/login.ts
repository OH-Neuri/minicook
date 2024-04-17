import { UserType } from "../../type";
import { defaultClient } from "../index";

export type LoginParams = {
  /**
   * 사용자 이메일
   * 샘플 사용자의 사용자명은 "sky@naver.com"
   */
  email: string;
  /**
   * 비밀번호
   * 샘플 사용자의 비밀번호는 "password1!"
   */
  password: string;
};

/**
 * 인증 API(로그인)
 *
 * @param 사용자 이메일, 패스워드
 * @returns 로그인 사용자
 */
const login = ({ email, password }: LoginParams): Promise<UserType> =>
  defaultClient.post("/api/user/login", { email, password });

export default login;
