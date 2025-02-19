import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

const button = cva(
  [
    "px-3",
    "py-2",
    "rounded-[8px]",
    "font-bold",
    "text-[18px]",
    "leading-[20px]",
    "font-poppins",
    "flex",
    "justify-center",
    "items-center",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gold",
          "text-[#040404]",
          "hover:bg-[#F5D06F]/90",
          "transition-all",
          "duration-300",
        ],

        // "primary-orange": ["bg-orange", "text-white"],
        // secondary: ["bg-[#F4EFE1]", "text-green-dark"],
        // gold: ["gold-button"],
        // "primary-outlined": [
        //   "border",
        //   "border-green-light",
        //   "bg-green-dark",
        //   "text-green-light",
        // ],
      },
      size: {
        small: ["py-5", "px-3"],
        medium: [""],
      },
    },
    compoundVariants: [{ variant: "primary", size: "medium", class: "" }],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}) => (
  <button
    disabled={isLoading}
    className={cn(button({ variant, size, className }))}
    {...props}
  >
    {isLoading ? <Spinner /> : children}
    {/* {isLoading ? "Loading..." : children} */}
  </button>
);

export default Button;
