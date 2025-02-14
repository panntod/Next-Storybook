import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
  args: {
    variant: "default",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is a default alert message. It provides some information.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong! Please try again later.
        </AlertDescription>
      </>
    ),
  },
};
