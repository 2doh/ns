"use client";

import React from "react";
import googleIcon from "../image/icons/devicon_google.svg";
import kakaoIcon from "../image/icons/ri_kakao-talk-fill.svg";
import naverIcon from "../image/icons/simple-icons_naver.svg";
import Image from "next/image";

const SocialAuth = () => {
  const btnArr = [
    {
      icon: googleIcon,
      bgColor: "#000000",
    },
    {
      icon: kakaoIcon,
      bgColor: "#ffeb38",
    },
    {
      icon: naverIcon,
      bgColor: "#22d61e",
    },
  ];

  const tempHandleClick = () => {
    alert("미구현입니다");
  };

  return (
    <div className="flex space-x-4">
      {btnArr.map((item, index) => (
        <button
          key={index}
          className="flex-1 py-1 rounded-lg flex justify-center items-center"
          style={{ backgroundColor: item.bgColor }}
          onClick={tempHandleClick}
        >
          <Image src={item.icon} alt="icon" />
        </button>
      ))}
    </div>
  );
};

export default SocialAuth;
