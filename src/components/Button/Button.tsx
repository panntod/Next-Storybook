import React from 'react';

interface ButtonProps {
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  label,
  onClick,
}) => {
  const variants = {
    primary: "bg-blue-400 hover:bg-blue-500 text-white",
    success: "bg-green-400 hover:bg-green-500 text-white",
    warning: "bg-yellow-400 hover:bg-yellow-500 text-black",
    danger: "bg-red-400 hover:bg-red-500 text-white",
  }[variant]
  const sizes = {
    small: "text-sm py-2.5 px-4",
    medium: "text-base py-3 px-6",
    large: "text-lg py-4 px-8",
  }[size]
  return (
    <button
      type="button"
      className={[
        `hover:scale-105 transition-all duration-400 rounded-full shadow`,
        sizes,
        variants,
      ].join(" ")}
      onClick={onClick}
    >
      <p className="font-semibold">{label}</p>
    </button>
  );
};
