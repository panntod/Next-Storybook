import { HTMLAttributes } from "react";
import { BsCheck, BsExclamationCircle, BsExclamationTriangle, BsQuestion } from "react-icons/bs";

import { Button } from "../Button/Button";
import "./alert.css"

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "success" | "warning" | "danger";
  classname?: string;
  title: string;
  label: string;
}

export const Alert = ({ title, label, variant, classname }: AlertProps) => {
  const icon = variant === "primary" ? <BsQuestion /> : variant === "success" ? <BsCheck /> : variant === "danger" ? <BsExclamationTriangle /> : variant === "warning" ? <BsExclamationCircle /> : ""

  return (
    <article
      className={[
        "rounded-xl p-4 text-black w-max max-w-[580px] min-h-[100px] border flex gap-2",
        `bg-${variant}`,
        classname,
      ].join(" ")}
    >
      <section className="flex items-center space-x-2">
        <div className="flex items-start space-x-2">
          <div className={["p-2 rounded-full", `storybook-alert-${variant}`].join(" ")}>
            {icon}
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
