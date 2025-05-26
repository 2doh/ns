"use client";

import AuthForm from "@/components/auth/AuthForm";
import AuthLink from "./AuthLink";
import SocialAuth from "./SocialAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export default function Home() {
  const labelArr = [
    { label: "이메일", type: "email" },
    { label: "비밀번호", type: "password" },
  ];
  const titleObj = { title: "로그인" };

  const initAuthState = {
    userMail: "",
    userPass: "",
  };

  const AuthSchema = yup.object().shape({
    userMail: yup
      .string()
      .required("이메일을 입력해주세요")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        "유효한 이메일 형식이 아닙니다.",
      ),
    userPass: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .matches(
        /^[a-zA-Z0-9]{8,12}$/,
        "비밀번호는 8~12자 영어와 숫자의 조합으로 입력해 주세요.",
      ),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initAuthState,
    resolver: yupResolver(AuthSchema),
    mode: "onChange",
  });
  return (
    <>
      <h2
        className="text-2xl font-bold text-center"
        style={{ color: "#2a1b07" }}
      >
        {titleObj.title}
      </h2>
      <AuthForm
        labelArr={labelArr}
        titleObj={titleObj}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <AuthLink />
      <div className="text-center text-sm text-gray-500">
        또는 소셜 계정으로 로그인
      </div>
      <SocialAuth />
    </>
  );
}
