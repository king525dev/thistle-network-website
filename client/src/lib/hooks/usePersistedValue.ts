"use client";

import { useCallback, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

/**
 * A string kept in localStorage, read with useSyncExternalStore so it is safe during
 * hydration: the server and the first client render both use `fallback`, and the stored
 * value is applied straight after. Used to remember a visitor's own likes and reactions.
 */
export function usePersistedValue(key: string, fallback: string): [string, (value: string) => void] {
  const subscribe = useCallback((callback: () => void) => {
    listeners.add(callback);
    window.addEventListener("storage", callback);
    return () => {
      listeners.delete(callback);
      window.removeEventListener("storage", callback);
    };
  }, []);

  const value = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(key) ?? fallback,
    () => fallback
  );

  const setValue = useCallback(
    (next: string) => {
      window.localStorage.setItem(key, next);
      notify();
    },
    [key]
  );

  return [value, setValue];
}
