import Image from "next/image";
import Link from "next/link";

import { FC, HTMLAttributes } from "react";
import { Button } from "../Button/Button";
import "./card.css"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  image: string;
  title: string;
  label: string;
}

export const Card: FC<CardProps> = ({
  variant = "light",
  image = "https://placehold.co/600x400",
  title,
  label,
}) => {
  return (
    <div className={["max-w-sm rounded-lg shadow", `storybook-card-${variant}`].join(" ")}>
      <Link href="#">
        <Image className="rounded-t-lg" src={image} alt={title} width={600} height={400} />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        </Link>
        <p className="mb-3 font-normal">{label}</p>
        <Button label="Button" variant="primary" />
      </div>
    </div>

  );
};
