import { HTMLAttributes } from "react";
import { Button } from "../Button/Button";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "danger";
  classname?: string;
  title: string;
  label: string;
}

export const Alert = ({ title, label, variant, classname }: AlertProps) => {
  const variantClass = variant;
  return (
    <div
      className={[
        "rounded-xl px-2 py-1 text-black w-[560px] h-[86px] border flex gap-2",
        variantClass,
        classname,
      ].join(" ")}
    >
      <div className="flex space-x-2">
        <div>
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-base font-medium">{label}</p>
        </div>
        <Button label="Label" variant={variant} />
      </div>
    </div>
  );
};
