"use client";

import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  return {
    naviTo: (adress: string) => router.push(adress),
  };
};
