import { cn } from "@/lib/clsx";
import { SIZE_VARIANT } from "../constant/SIZE";
import { TypographyProps } from "../types/Typography.type";

export function Typography({
  children,
  size = "P",
  className = "",
}: Readonly<TypographyProps>) {
  const { className: sizeClassName, tag: Tag } = SIZE_VARIANT[size];

  const Element = Tag as keyof JSX.IntrinsicElements;

  return <Element className={cn(sizeClassName, className)}>{children}</Element>;
}
