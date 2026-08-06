import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  wordmark = true,
}: {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img
        src={logoMark}
        alt="HR Renergy logo"
        width={816}
        height={816}
        className={cn("size-11 shrink-0 object-contain", markClassName)}
      />
      {wordmark && (
        <span className="font-display text-xl font-extrabold leading-none tracking-tight text-foreground sm:text-2xl">
          HR<span className="text-primary">&nbsp;Renergy</span>
        </span>
      )}
    </span>
  );
}
