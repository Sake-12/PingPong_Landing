import { ComponentPropsWithRef, CSSProperties, useMemo } from "react";

type Props = {
  flexGrow?: CSSProperties["flexGrow"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
} & Omit<ComponentPropsWithRef<"div">, "style">;

export default function Space({ flexGrow, height, width, ...props }: Props) {
  const style = useMemo(
    () => ({ flexGrow, height, width }),
    [flexGrow, height, width],
  );

  return (
    <div style={useMemo<CSSProperties>(() => style, [style])} {...props}></div>
  );
}
