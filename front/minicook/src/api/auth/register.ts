import { defaultClient } from "../index";

export type RegisterParams = {
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
  /**
   * 닉네임
   */
  //  nickname : string;
};

/**
 * 인증 API(회원가입)
 *
 * @param 사용자 이메일, 비밀번호, 닉네임
 * @returns
 */
const register = ({ email, password }: RegisterParams): Promise<void> =>
  defaultClient.post("api/user/register", { email, password });

export default register;
