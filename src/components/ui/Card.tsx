import type { CSSProperties, HTMLAttributes, PointerEvent, PropsWithChildren } from "react";
import { cx } from "../../lib/utils";

type CursorCardStyle = CSSProperties & {
  "--cursor-x"?: string;
  "--cursor-y"?: string;
};

export function Card({
  children,
  className,
  onPointerMove,
  onPointerMoveCapture,
  style,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      className={cx("card", className)}
      style={{ "--cursor-x": "50%", "--cursor-y": "50%", ...style } as CursorCardStyle}
      onPointerMove={onPointerMove}
      onPointerMoveCapture={(event) => {
        handlePointerMove(event);
        onPointerMoveCapture?.(event);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
