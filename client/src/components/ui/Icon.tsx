import { iconSvg, type IconName } from "./icons";

type IconProps = {
  name: IconName;
  className?: string;
};

/** Renders one of the uploaded inline SVG icons. Decorative: hidden from screen readers. */
export default function Icon({ name, className }: IconProps) {
  return (
    <span
      className={className ? `icon-slot ${className}` : "icon-slot"}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconSvg[name] }}
    />
  );
}
