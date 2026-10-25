import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** The uploaded `.container` width and padding rules. */
export default function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={["container", className].filter(Boolean).join(" ")}>{children}</Tag>;
}
