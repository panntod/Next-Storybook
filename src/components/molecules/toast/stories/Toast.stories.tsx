import { Button } from "@/components/atoms/button";
import { Toaster } from "@/components/molecules/toast/components/Toaster";
import { toast } from "@/components/molecules/toast/hooks/use-toast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toaster> = {
  title: "Molecules/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "Success",
            description: "This is a success message",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
};
