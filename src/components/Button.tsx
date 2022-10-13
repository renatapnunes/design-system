import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <>
      <Component
        className={clsx(
          "bg-gradient-to-r from-green-400 via-teal-300 to-sky-400 font-semibold px-4 py-2 w-96 h-11 rounded text-slate-900 text-sm font-sans hover:border-solid hover:border-4 hover:border-green-400 hover:py-0",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </>
  );
}
