import "./breadcrumb.css";
import Link from "next/link";
import { HTMLAttributes } from "react";

import { BsHouse } from "react-icons/bs";

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "large" | "medium" | "small";
    data: { title: string; path: string; }[];
    separator?: string;
}

export const Breadcrumb = ({ variant = "medium", data, separator = ">" }: BreadcrumbProps) => {
    return (
        <ol className={[`flex`, `storybook-breadcrumb-${variant}`].join(" ")}>
            {data.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                    {index === 0 ? <BsHouse className="text-blue-500" /> : <span className="mx-2">{separator}</span>}
                    <Link href={item.path} className={index === data.length - 1 ? "text-gray-500" : "text-blue-500"}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ol>
    );
};
