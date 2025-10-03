import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
