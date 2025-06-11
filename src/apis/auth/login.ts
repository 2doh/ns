import { SigninFormData } from "@/schema/authSchema";
import { supabase } from "@/shared/supabase/supabase";

export const authSignin = async (formData: SigninFormData) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.mail,
      password: formData.pass,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      user: data.user,
      session: data.session,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};
