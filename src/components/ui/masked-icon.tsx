import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MaskedIconProps = HTMLAttributes<HTMLSpanElement> & {
  src: string;
};

export function MaskedIcon({ src, className, style, ...props }: MaskedIconProps) {
  return (
    <span
      aria-hidden
      {...props}
      className={cn("inline-block", className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
        ...style,
      }}
    />
  );
}

