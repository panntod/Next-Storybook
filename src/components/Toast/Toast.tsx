import React from 'react';
import './toast.css';

interface ToastProps {
    variant?: "primary" | "success" | "warning" | "danger";
    size?: "small" | "medium" | "large";
    title: string;
    message: string;
    onClick?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
    variant = "primary",
    size = "medium",
    title,
    message,
    onClick,
}) => {
    return (
        <div className={["border-2 rounded-lg relative", `storybook-toast-${variant}`, `storybook-toast-${size}`].join(" ")}>
            <button onClick={onClick} type="button" className="absolute top-0 right-3 m-2 font-semibold">x</button>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-base">{message}</p>
        </div>
    );
};
