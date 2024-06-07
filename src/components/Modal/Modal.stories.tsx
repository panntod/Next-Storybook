import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
    title: "Molecule/Modal",
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

export const Form: Story = {
    args: {
        variant: "dark",
        title: "Login Form",
        children: (
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>

                    <Button label="Submit" variant="primary" />
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        ),
    },
};