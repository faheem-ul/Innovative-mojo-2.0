import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2" | "h3";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: (
    event: React.MouseEvent<HTMLHeadingElement | HTMLParagraphElement>
  ) => void;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-poppins text-[72px] font-black leading-[88px] text-primary mob:text-[56px] mob:leading-[72px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-poppins text-[60px] font-bold leading-[72px] text-primary mob:text-[48px] mob:leading-[60px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }
    if (as === "h3") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-poppins text-[32px] font-semibold leading-[44px] text-primary mob:text-[28px] mob:leading-[40px]",
            className
          )}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "font-poppins text-[20px] font-normal leading-[32px ] text-primary mob:text-[18px] mob:leqading-[28px]",
          className
        )}
        onClick={onClick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
