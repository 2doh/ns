import AuthForm from "@/components/auth/AuthForm";
import AuthLink from "./AuthLink";
import SocialAuth from "./SocialAuth";

export default function Home() {
  const labelArr = [
    { label: "이메일", type: "email" },
    { label: "비밀번호", type: "password" },
  ];
  const titleObj = { title: "로그인" };

  return (
    <>
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
    </>
  );
}
