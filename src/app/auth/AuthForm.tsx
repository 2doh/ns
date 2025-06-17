"use client";

import FormBtn from "@/components/auth/FormBtn";
import { authBaseSchema, SigninFormData } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LabelItem } from "./page";
import { authSignin } from "@/apis/auth/login";
import { useState } from "react";
import { useNavigation } from "@/hooks/useNavigation";
import { supabase } from "@/shared/supabase/supabase";
import { userAuthStore } from "@/store/userAuthStore";

type AuthFormProps = {
  labelArr: LabelItem[];
  titleObj: {
    title: string;
  };
};

const AuthForm = ({ labelArr, titleObj }: AuthFormProps) => {
  const [errMsg, setErrMsg] = useState("");
  const { naviTo } = useNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(authBaseSchema),
  });

  const onSubmit = async (formData: SigninFormData) => {
    setErrMsg("");

    const result = await authSignin(formData);

    if (result.success === false) {
      setErrMsg("이메일 또는 비밀번호를 확인해주세요.");
      return;
    }

    const userId = result.session?.user?.id;

    if (!userId) {
      setErrMsg("유저 정보를 가져올 수 없습니다.");
      return;
    }
      // naviTo("/");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {labelArr.map((item, index) => (
        <div key={index}>
          <label className="block text-sm mb-1 text-[#2a1b07]">
            {item.label}
          </label>
          <input
            type={item.type}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 border-[#e6e5e6] text-[#2a1b07]"
            {...register(item.name)}
          />
          {errors[item.name] && (
            <p className="text-sm mt-1 text-red-600">
              {errors[item.name]?.message}
            </p>
          )}
        </div>
      ))}
      <p className="text-sm mt-1 text-red-600">{errMsg}</p>
      <FormBtn title={titleObj.title} />
    </form>
  );
};

export default AuthForm;
