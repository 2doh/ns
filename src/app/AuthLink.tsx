"use client";
import React from "react";

const AuthLink = () => {
  const tempHandleClick = () => {
    alert("미구현입니다");
  };
  const linkArr = [
    { label: "아이디 찾기", href: "#" },
    { label: "비밀번호 찾기", href: "#" },
    { label: "회원가입", href: "#" },
  ];
  return (
    <div className="flex justify-around ">
      {linkArr.map((i, index) => (
        <a
          className="text-sm mb-1"
          key={index}
          href={i.href}
          onClick={tempHandleClick}
        >
          {i.label}
        </a>
      ))}
    </div>
  );
};

export default AuthLink;
