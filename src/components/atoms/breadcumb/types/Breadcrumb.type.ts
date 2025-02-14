import { VariantProps } from "class-variance-authority";
import { OlHTMLAttributes, ReactNode } from "react";
import { breadcrumbVariant } from "../utils";

export interface BreadcrumbProps
  extends OlHTMLAttributes<HTMLOListElement>,
    VariantProps<typeof breadcrumbVariant> {
  data: { title: string; path: string }[];
  separator?: string | ReactNode;
}
