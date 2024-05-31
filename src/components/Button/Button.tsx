import React from 'react';
import './button.css';
import cn from '@/lib/clsx';

interface ButtonProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  style?: 'solid' | 'plain' | 'outlined';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  style = "solid",
  label,
  onClick,
}) => {
  const color = variant === "primary"
  ? "blue"
  : variant === "success"
    ? "green"
    : variant === "warning"
      ? "yellow"
      : variant === "danger"
        ? "red"
        : "";

const background = style === "solid"
  ? "bg"
  : style === "outlined"
    ? "border"
    : style === "plain"
      ? ""
      : ""

  return (
    <button
      type="button"
      className={cn(
        `border-2 hover:scale-105 transition-all duration-400 rounded-lg shadow`,
        `storybook-button-${size}`,
        `${style === "solid" ? "text-white" : `text-${color}-500`}`,
        `${background}-${color}-400 hover:${background}-${color}-500`
      )}
      onClick={onClick}
    >
      <p className="font-semibold">{label}</p>
    </button>
  );
};
