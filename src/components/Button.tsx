import { clsx } from "clsx";
import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <>
      <Component
        className={clsx(
          "bg-gradient-to-r from-green-400 via-teal-300 to-sky-400 font-semibold px-4 py-2 w-96 h-11 rounded text-slate-900 text-sm font-sans hover:border-solid hover:border-2 hover:border-react-color hover:text-md"
        )}
      >
        {children}
      </Component>
    </>
  );
}
