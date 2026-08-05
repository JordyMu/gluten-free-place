import { lazy, type ComponentType } from "react";

const KEY = "__chunk_retry_at";

/**
 * React.lazy wrapper that recovers from stale/missing chunk files after a new
 * deployment: retries once, then force-reloads the page (max once per 10s).
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error) {
      // Second attempt in case of a transient network failure.
      try {
        return await factory();
      } catch (retryError) {
        let last = 0;
        try {
          last = parseInt(sessionStorage.getItem(KEY) || "0", 10);
        } catch {
          /* ignore */
        }
        if (Date.now() - last > 10000) {
          try {
            sessionStorage.setItem(KEY, String(Date.now()));
          } catch {
            /* ignore */
          }
          if (typeof caches !== "undefined" && caches.keys) {
            try {
              const keys = await caches.keys();
              await Promise.all(keys.map((k) => caches.delete(k)));
            } catch {
              /* ignore */
            }
          }
          // Cache-bust the document so we don't get the same stale index.html
          const url = new URL(window.location.href);
          url.searchParams.set("__r", String(Date.now()));
          window.location.replace(url.toString());
          // Keep the promise pending while the page reloads.
          return await new Promise<{ default: T }>(() => {});
        }
        throw retryError;
      }
    }
  });
}
