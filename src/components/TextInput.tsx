import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap3 px-4 py-2 w-96 h-11 rounded bg-slate-700 focus-within:ring-2 focus-within:ring-slate-400">
      {children}
    </div>
  );
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-slate-500">{children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent px-4 py-2 w-96 h-11 flex-1 outline-none font-sans bg-slate-700 text-slate-300 text-xs placeholder:text-slate-500"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
