import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
    title: "Atomic/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
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
                path: "/library"
            },
            {
                title: "Data",
                path: "/data"
            },
        ]
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
                path: "/library"
            },
            {
                title: "Data",
                path: "/data"
            },
        ],
        separator: "/"
    },
};
