import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"div">;

export default function ScrollSnapedContainer({ children, ...props }: Props) {
  return (
    <div className="flex snap-center snap-always flex-col" {...props}>
      {children}
    </div>
  );
}
