import { cn } from "@/lib/utils";

type FillImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function FillImage({ src, alt, className, priority }: FillImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
