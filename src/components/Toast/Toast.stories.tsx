import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { fn } from "@storybook/test";

const meta: Meta<typeof Toast> = {
    title: "Atomic/Toast",
    component: Toast,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary", "success", "warning", "danger"],
            },
        },
        size: {
            control: {
                type: "radio",
                options: ["small", "medium", "large"],
            },
        },
        onClick: { action: "clicked" },
    },
    args: {
        variant: "primary",
        size: "medium",
        message: "Toast",
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "medium",
        title: "Info Message",
        message: "This is Info message for information type",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        size: "medium",
        title: "Success Message",
        message: "This is Success message for information type",
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        size: "medium",
        title: "Warning Message",
        message: "This is Warning message for information type",
    },
};

export const Danger: Story = {
    args: {
        variant: "danger",
        size: "medium",
        title: "Danger Message",
        message: "This is Danger message for information type",
    },
};
