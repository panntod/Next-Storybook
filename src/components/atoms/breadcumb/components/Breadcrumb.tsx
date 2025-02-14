import { cn } from "@/lib/clsx";
import { House } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { BreadcrumbProps } from "../types/Breadcrumb.type";
import { breadcrumbVariant } from "../utils";

const Breadcrumb: FC<BreadcrumbProps> = ({
  variant = "medium",
  data,
  className = "",
  separator = ">",
  ...props
}) => {
  return (
    <ol className={cn(breadcrumbVariant({ variant }), className)} {...props}>
      {data.map((item, index) => (
        <li key={index} className="flex gap-2 items-center">
          {index === 0 ? <House /> : <span className="mx-2">{separator}</span>}
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ol>
  );
};

Breadcrumb.displayName = "Breadcrumb";
export { Breadcrumb };
