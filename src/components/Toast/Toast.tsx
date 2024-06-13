import React from 'react';

interface ToastProps {
    variant: "primary" | "success" | "warning" | "danger";
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
    const variants = {
        success: "border-green-500 bg-green-100 text-green-600",
        danger: "border-red-500 bg-red-100 text-red-600",
        warning: "border-yellow-500 bg-yellow-100 text-yellow-600",
        primary: "border-blye-500 bg-blue-100 text-blue-600",
    }[variant]

    const sizes = {
        small: "p-4",
        medium: "p-5",
        large: "p-6",
    }[size]

    return (
        <div className={["border-2 rounded-lg relative", variants, sizes].join(" ")}>
            <button onClick={onClick} type="button" className="absolute top-0 right-3 m-2 font-semibold">x</button>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-base">{message}</p>
        </div>
    );
};
