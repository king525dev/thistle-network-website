"use client";

import Button from "@/components/ui/Button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="wrap" style={{ padding: "100px 0", textAlign: "center" }}>
      <h1>Something went wrong.</h1>
      <p style={{ margin: "16px 0 28px" }}>
        Please try again, or head back to the homepage.
      </p>
      <Button onClick={reset} variant="primary">
        Try again
      </Button>
    </div>
  );
}
