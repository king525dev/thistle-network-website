import Image from "next/image";

type ThistleLogoProps = {
  /** "mark" = just the flower/network emblem. "full" = emblem + wordmark. */
  variant?: "mark" | "full";
  size?: number;
  className?: string;
};

/**
 * Renders the Thistle Network logo.
 *
 * The actual artwork is supplied separately - drop the SVG at
 * `public/images/thistle-logo.svg` (and `thistle-emblem.svg` for the
 * mark-only version used in the hero). Until then this renders the
 * wordmark on its own so the layout still reads correctly.
 */
export default function ThistleLogo({ variant = "full", size = 36, className }: ThistleLogoProps) {
  return (
    <span className={["brand-lockup", className].filter(Boolean).join(" ")}>
      <Image
        src="/images/thistle-emblem.svg"
        alt=""
        width={size}
        height={size}
        className="brand-mark"
        aria-hidden="true"
      />
      {variant === "full" && (
        <span className="brand-text">
          <span className="c-purple">Thistle</span> <span className="c-green">Network</span>
        </span>
      )}
    </span>
  );
}
