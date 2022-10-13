import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="h-6 w-6 p-[2px] bg-slate-700 text-react-color rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-react-color" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
