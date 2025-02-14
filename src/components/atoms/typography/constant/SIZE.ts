export const SIZE_VARIANT = {
  H1: {
    className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    tag: "h1",
  },
  H2: {
    className:
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    tag: "h2",
  },
  H3: {
    className: "scroll-m-20 text-2xl font-semibold tracking-tight",
    tag: "h3",
  },
  H4: {
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
    tag: "h4",
  },
  H5: {
    className: "scroll-m-20 text-lg font-semibold tracking-tight",
    tag: "h5",
  },
  H6: {
    className: "scroll-m-20 text-md font-semibold tracking-tight",
    tag: "h6",
  },
  P: { className: "leading-7 [&:not(:first-child)]:mt-6", tag: "p" },
  BLOCKQUOTE: { className: "mt-6 border-l-2 pl-6 italic", tag: "blockquote" },
  TABLE_HEAD: {
    className:
      "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
    tag: "th",
  },
  TABLE_DATA: {
    className:
      "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
    tag: "td",
  },
  UNORDER_LIST: {
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
    tag: "ul",
  },
  ORDER_LIST: {
    className: "my-6 ml-6 list-disc [&>li]:mt-2",
    tag: "ol",
  },
  INLINE_CODE: {
    className:
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    tag: "code",
  },
  LEAD: {
    className: "text-xl text-muted-foreground",
    tag: "span",
  },
  LARGE: {
    className: "text-lg font-semibold",
    tag: "span",
  },
  SMALL: {
    className: "text-sm font-medium leading-none",
    tag: "small",
  },
  MUTED: {
    className: "text-sm text-muted-foreground",
    tag: "p",
  },
} as const;

export type SizeVariant = keyof typeof SIZE_VARIANT;
