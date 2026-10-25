"use client";

/** Shown when a route throws. The reset button retries rendering the route. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container error-state">
      <h1>Something went wrong.</h1>
      <p>Please try again, or head back to the homepage.</p>
      <button className="btn btn-primary" type="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
