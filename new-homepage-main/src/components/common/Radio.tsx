import { ComponentPropsWithRef, useId } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentPropsWithRef<"input"> & { label: string };

export default function Radio({ className, label, ...props }: Props) {
  const id = useId();

  return (
    <div className={twMerge("flex gap-2", className)}>
      <input type="radio" id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
