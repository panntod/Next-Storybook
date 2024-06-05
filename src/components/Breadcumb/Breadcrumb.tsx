import { HTMLAttributes } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import "./breadcrumb.css";

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "large" | "medium" | "small";
    data: { title: string; path: string; icon?: IconType }[];
    separator?: string;
}

export const Breadcrumb = ({ variant = "medium", data, separator = ">", ...rest }: BreadcrumbProps) => {
    return (
        <div className={[`flex`, `storybook-breadcrumb-${variant}`].join(" ")} {...rest}>
            {data.map((item, index) => {
                const IconComponent = item?.icon;
                const isLastItem = index === data.length - 1;

                return (
                    <span key={index} className="flex gap-2 items-center">
                        {index > 0 && <span className="mx-2">{separator}</span>}
                        {IconComponent && <IconComponent className="text-blue-500" />}
                        <Link href={item.path} className={isLastItem ? "text-gray-500" : "text-blue-500"}>
                            {item.title}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};
