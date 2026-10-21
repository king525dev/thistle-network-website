import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Shared Button used across the site. Renders an anchor when `href` is
 * given (internal links use next/link; external/mailto/tel links fall
 * back to a plain `<a>`), otherwise a real `<button>`.
 */
export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, className, children, ...rest } = props;

  const classes = ["btn", `btn-${variant}`, `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {icon}
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
