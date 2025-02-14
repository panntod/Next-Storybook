import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../components/Breadcrumb";

const meta = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    separator: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "medium",
    data: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Library",
        path: "/library",
      },
      {
        title: "Data",
        path: "/data",
      },
    ],
  },
};

export const Custom: Story = {
  args: {
    variant: "medium",
    data: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Library",
        path: "/library",
      },
      {
        title: "Data",
        path: "/data",
      },
    ],
    separator: "/",
  },
};
