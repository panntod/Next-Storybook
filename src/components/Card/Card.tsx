import { FC, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevation" | "outlined";
  backgroundColor?: string;
  fontColor?: string;
  classname?: string;
  label: string;
}

export const Card: FC<CardProps> = ({
  label,
  fontColor = "#000",
  backgroundColor = "#fff",
  variant = "elevation",
  children,
  classname,
  ...rest
}) => {
  return (
    <div
      className={[
        "rounded-xl p-2",
        variant === "elevation" ? "shadow-lg" : "border-2 border-solid",
        classname].join(" ")
      }
      {...rest}
      style={{ backgroundColor, color: fontColor }}
    >
      {children}
      <pre>{label}</pre>
    </div>
  );
};
