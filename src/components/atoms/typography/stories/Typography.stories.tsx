import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../components/Typography";
import { SIZE_VARIANT } from "../constant/SIZE";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: Object.keys(SIZE_VARIANT),
    },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    children: "Welcome to the Typography Component",
    size: "P",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph.",
    size: "P",
  },
};

export const H1: Story = {
  args: {
    size: "H1",
    children: "This is a H1.",
  },
};

export const H2: Story = {
  args: {
    size: "H2",
    children: "This is a H2.",
  },
};

export const H3: Story = {
  args: {
    size: "H3",
    children: "This is a H3.",
  },
};

export const H4: Story = {
  args: {
    size: "H4",
    children: "This is a H4.",
  },
};

export const H5: Story = {
  args: {
    size: "H5",
    children: "This is a H5.",
  },
};

export const H6: Story = {
  args: {
    size: "H6",
    children: "This is a H6.",
  },
};

export const Blockquote: Story = {
  args: {
    size: "BLOCKQUOTE",
    children: "This is a Blockquote.",
  },
};

export const TableHead: Story = {
  args: {
    size: "TABLE_HEAD",
    children: "This is a Table Head",
  },
};

export const TableData: Story = {
  args: {
    size: "TABLE_DATA",
    children: "This is a Table Data",
  },
};

export const OrderList: Story = {
  args: {
    size: "ORDER_LIST",
    children: "This is a Order List",
  },
};

export const UnrderList: Story = {
  args: {
    size: "UNORDER_LIST",
    children: "This is a Unorder List",
  },
};

export const InlineCode: Story = {
  args: {
    size: "INLINE_CODE",
    children: "> Enter Your Name Here",
  },
};

export const Lead: Story = {
  args: {
    size: "LEAD",
    children: "This is Lead",
  },
};

export const Large: Story = {
  args: {
    size: "LARGE",
    children: "This is Large",
  },
};

export const Small: Story = {
  args: {
    size: "SMALL",
    children: "This is small",
  },
};

export const Muted: Story = {
  args: {
    size: "MUTED",
    children: "Sorry You're Muted!",
  },
};
