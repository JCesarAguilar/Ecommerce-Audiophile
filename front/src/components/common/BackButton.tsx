"use client";

import { useRouter } from "next/navigation";

interface ButtonBackProps {
  children: React.ReactNode;
  className?: string;
}

export default function BackButton({ children, className }: ButtonBackProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`text-gray-dark font-normal pt-7 text-[14px] lg:pt-0 lg:mb-0 hover:text-orange-strong cursor-pointer px-7 lg:px-30 ${className}`}
    >
      {children}
    </button>
  );
}
