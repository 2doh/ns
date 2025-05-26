"use client";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormBtn from "../common/FormBtn";

type LabelItem = {
  label: string;
  type?: string;
};

type FormValues = {
  userMail: string;
  userPass: string;
};

type AuthFormProps = {
  labelArr: LabelItem[];
  titleObj: {
    title: string;
  };
  register: UseFormRegister<FormValues>;
  handleSubmit: (
    onValid: (data: FormValues) => void,
  ) => (e?: React.BaseSyntheticEvent) => void;
  errors: FieldErrors<FormValues>;
};

const AuthForm = ({
  labelArr,
  titleObj,
  register,
  handleSubmit,
  errors,
}: AuthFormProps) => {
  const handleOnSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleOnSubmit)}>
      {labelArr.map((item, index) => (
        <div key={index}>
          <label className="block text-sm mb-1" style={{ color: "#2a1b07" }}>
            {item.label}
          </label>
          <input
            {...register(item.type === "email" ? "userMail" : "userPass")}
            type={item.type}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              borderColor: "#e6e5e6",
              color: "#2a1b07",
            }}
          />
        </div>
      ))}
      <div>
        {errors?.userMail && (
          <p className="text-red-500 text-sm">{errors.userMail.message}</p>
        )}
      </div>
      <FormBtn title={titleObj.title} />
    </form>
  );
};

export default AuthForm;
