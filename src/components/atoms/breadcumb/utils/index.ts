import { cva } from "class-variance-authority";

export const breadcrumbVariant = cva("inline-flex items-center", {
  variants: {
    variant: {
      large: "text-lg space-x-4 font-semibold",
      medium: "text-base space-x-4 font-medium",
      small: "text-sm space-x-2 font-normal",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});
