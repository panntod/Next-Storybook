import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";

const meta: Meta<typeof Modal> = {
    title: "Atomic/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["dark", "light"],
            },
        },
        onClick: { action: "clicked" },
    },
    args: {
        variant: "light",
        accept: "Accept",
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        variant: "light",
        title: "Light Theme",
        reject: "Decline",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum.",
    },
};

export const Dark: Story = {
    args: {
        variant: "dark",
        title: "Dark Theme",
        reject: "Decline",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aliquam magnam eum.",
    },
};
