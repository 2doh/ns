import React from "react";

type FormBtnProps = {
  title: string;
};

const FormBtn = (titleObj: FormBtnProps) => {
  return (
    <button
      type="submit"
      className="w-full py-2 rounded-lg text-white font-semibold bg-primary"
    >
      {titleObj.title}
    </button>
  );
};

export default FormBtn;
