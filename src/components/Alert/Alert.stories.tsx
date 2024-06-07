import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert } from "./Alert";

const meta = {
  title: "Molecule/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab ipsa recusandae?",
    title: "Lorem Ipsum",
  },
};
