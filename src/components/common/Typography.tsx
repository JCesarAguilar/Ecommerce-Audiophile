import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TitleProduct = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-[43px] text-center leading-13 font-medium lg:text-left ${className}`}
    >
      {children}
    </h1>
  );
};

export const TitleProductII = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`lg:text-[30px] font-bold text-[25px] tracking-[0.1rem] pt-1${className}`}
    >
      {children}
    </h2>
  );
};

export const TitleCategory = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`text-white-smoke font-semibold text-[22px] tracking-[2] lg:text-[35px] lg:tracking-[4] bg-black-medium h-[12vh] grid place-items-center lg:h-[20vh] ${className}`}
    >
      {children}
    </h2>
  );
};

export const TitleNew = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={`text-[17px] text-center tracking-[0.5rem] ${className}`}>
      {children}
    </h3>
  );
};

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={`text-[25px] font-bold lg:text-left lg:text-[27px] leading-8 ${className}`}
    >
      {children}
    </h3>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={`text-[16px] lg:text-[18px] font-bold text-black-dark tracking-[0.05rem] ${className}`}
    >
      {children}
    </h3>
  );
};

export const P = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={`text-[15px] text-center lg:place-items-start lg:text-left leading-7 ${className}`}
    >
      {children}
    </p>
  );
};
