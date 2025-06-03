"use client";
import FormBtn from "../common/FormBtn";

type LabelItem = {
  label: string;
  type?: string;
};

type AuthFormProps = {
  labelArr: LabelItem[];
  titleObj: {
    title: string;
  };
};

const AuthForm = ({ labelArr, titleObj }: AuthFormProps) => {
  return (
    <form className="space-y-4">
      {labelArr.map((item, index) => (
        <div key={index}>
          <label className="block text-sm mb-1" style={{ color: "#2a1b07" }}>
            {item.label}
          </label>
          <input
            type={item.type}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              borderColor: "#e6e5e6",
              color: "#2a1b07",
            }}
          />
        </div>
      ))}

      <FormBtn title={titleObj.title} />
    </form>
  );
};

export default AuthForm;
