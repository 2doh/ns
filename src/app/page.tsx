import { SigninFormData } from "@/schema/authSchema";
import AuthForm from "./AuthForm";
import AuthLink from "./AuthLink";
import SocialAuth from "./SocialAuth";

export type LabelItem = {
  label: string;
  type?: string;
  name: keyof SigninFormData;
};

export default function Home() {
  const labelArr: LabelItem[] = [
    { label: "이메일", type: "email", name: "mail" },
    { label: "비밀번호", type: "password", name: "pass" },
  ];
  const titleObj = { title: "로그인" };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6 border"
        style={{ borderColor: "#e6e5e6" }}
      >
        <h2
          className="text-2xl font-bold text-center"
          style={{ color: "#2a1b07" }}
        >
          {titleObj.title}
        </h2>
        <AuthForm labelArr={labelArr} titleObj={titleObj} />
        <AuthLink />
        <div className="text-center text-sm text-gray-500">
          또는 소셜 계정으로 로그인
        </div>
        <SocialAuth />
      </div>
    </div>
  );
}
