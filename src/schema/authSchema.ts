import { z } from "zod";

export const authBaseSchema = z.object({
  mail: z
    .string()
    .email("이메일 형식이 아닙니다.")
    .nonempty("이메일을 입력해주세요."),
  pass: z
    .string()
    .min(8, "비밀번호는 최소 8글자 입니다.")
    .nonempty("비밀번호를 입력해주세요."),
});

export const signupSchema = authBaseSchema.extend({
  userName: z.string().nonempty("이름 혹은 닉네임을 입력해주세요."),
});

export type SigninFormData = z.infer<typeof authBaseSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
