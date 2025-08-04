import React from "react";
import clsx from "clsx";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "outline" | "secondary" ;

type CustomButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#0160A2] text-white hover:bg-[#014c82]",
  outline:
    "border border-[#0160A2] text-[#0160A2] hover:bg-[#0160A2] hover:text-white",
  secondary:
    "bg-white text-[#0160A2] border border-white hover:bg-[#0160A2] hover:text-white"
};


const CustomButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  loading = false,
  leftIcon,
  rightIcon,
  disabled = false,
}: CustomButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold cursor-pointer transition duration-300 min-w-[140px]";
  const styles = clsx(
    base,
    sizeStyles[size],
    variantStyles[variant],
    className,
    {
      "opacity-50 cursor-not-allowed": loading || disabled,
    }
  );

  const content = loading ? (
      <div className="loader scale-[0.5] mx-auto" />
  ) : (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles} aria-disabled={loading || disabled}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={loading || disabled}
    >
      {content}
    </button>
  );
};

export default CustomButton;
