import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Encapsulates the page max-width/padding previously represented by the
 * `.wrap` class in the static prototype.
 */
export default function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={["wrap", className].filter(Boolean).join(" ")}>{children}</Tag>;
}
