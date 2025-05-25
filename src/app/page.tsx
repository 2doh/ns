import AuthForm from "@/components/auth/AuthForm";
import SocialAuth from "./SocialAuth";

export default function Home() {
  const labelArr = [
    { label: "아이디 찾기", href: "#" },
    { label: "비밀번호 찾기", href: "#" },
    { label: "회원가입", href: "#" },
  ];
  return (
    <>
      <h2
        className="text-2xl font-bold text-center"
        style={{ color: "#2a1b07" }}
      >
        로그인
      </h2>
      <AuthForm />
      <div className="flex justify-around ">
        {labelArr.map((i, index) => (
          <a className="text-sm mb-1" key={index} href={i.href}>
            {i.label}
          </a>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500">
        또는 소셜 계정으로 로그인
      </div>
      <SocialAuth />
    </>
  );
}
