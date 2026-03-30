import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Lazy-loaded image with skeleton placeholder.
 * - Uses native loading="lazy" + decoding="async"
 * - Shows a shimmer skeleton until the image is ready
 * - priority=true → loading="eager" for above-the-fold images
 */
export function LazyImage({ src, alt, className, priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <span className="relative block w-full h-full">
      {/* Shimmer skeleton */}
      {!loaded && !error && (
        <span
          className="absolute inset-0 rounded-inherit bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}

      {error ? (
        <span className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-xs">
          Rasm yuklanmadi
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
        />
      )}
    </span>
  );
}
