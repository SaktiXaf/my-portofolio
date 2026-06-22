import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, PointerEvent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { cx } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
}

interface LinkButtonProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

interface NativeButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  to?: never;
}

type CursorButtonStyle = CSSProperties & {
  "--cursor-x"?: string;
  "--cursor-y"?: string;
};

export function Button(props: PropsWithChildren<LinkButtonProps | NativeButtonProps>) {
  const { children, className, variant = "primary" } = props;
  const classes = cx("button", `button-${variant}`, className);

  const updateCursor = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  if ("to" in props && props.to) {
    const {
      to,
      variant: _variant,
      className: _className,
      children: _children,
      onPointerMove,
      onPointerMoveCapture,
      style,
      ...linkProps
    } = props;

    return (
      <Link
        className={classes}
        to={to}
        style={{ "--cursor-x": "50%", "--cursor-y": "50%", ...style } as CursorButtonStyle}
        onPointerMove={onPointerMove}
        onPointerMoveCapture={(event) => {
          updateCursor(event);
          onPointerMoveCapture?.(event);
        }}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    className: _className,
    children: _children,
    onPointerMove,
    onPointerMoveCapture,
    style,
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button
      className={classes}
      type="button"
      style={{ "--cursor-x": "50%", "--cursor-y": "50%", ...style } as CursorButtonStyle}
      onPointerMove={onPointerMove}
      onPointerMoveCapture={(event) => {
        updateCursor(event);
        onPointerMoveCapture?.(event);
      }}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
