import { HTMLAttributes } from "react";
import { BsCheck, BsExclamationCircle, BsExclamationTriangle, BsQuestion } from "react-icons/bs";

import { Button } from "../Button/Button";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "success" | "warning" | "danger";
  classname?: string;
  title: string;
  label: string;
}

export const Alert = ({ title, label, variant, classname }: AlertProps) => {
  const icons = variant === "primary" ? <BsQuestion /> : variant === "success" ? <BsCheck /> : variant === "danger" ? <BsExclamationTriangle /> : variant === "warning" ? <BsExclamationCircle /> : ""

  const variants = {
    primary: "bg-blue-400 border-blue-200 text-white",
    success: "bg-green-400 border-green-200 text-white",
    warning: "bg-yellow-400 border-yellow-200 text-black",
    danger: "bg-red-400 border-red-200 text-white",
  }[variant];

  const background = {
    primary: "bg-blue-100",
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100",
  }[variant];

  return (
    <article
      className={[
        "rounded-xl p-4 text-black w-max max-w-[580px] min-h-[100px] border flex gap-2",
        background,
        classname,
      ].join(" ")}
    >
      <section className="flex items-center space-x-2">
        <div className="flex items-start space-x-2">
          <div className={["p-2 rounded-full", variants].join(" ")}>
            {icons}
          </div>
          <header>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-base font-medium">{label}</p>
          </header>
        </div>
        <Button label="Label" variant={variant} />
      </section>
    </article>
  );
};
