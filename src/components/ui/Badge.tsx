import type { HTMLAttributes, PropsWithChildren } from "react";
import { cx } from "../../lib/utils";

export function Badge({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span className={cx("badge", className)} {...props}>
      {children}
    </span>
  );
}
