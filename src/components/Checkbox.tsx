import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="h-5 w-5 p-[2px] bg-slate-700 text-react-color rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-4 w-4 text-react-color" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
