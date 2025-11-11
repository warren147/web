import { cn } from "@/lib/utils";

type LinkArrowProps = {
  className?: string;
};

const ARROW_COLOR = "#facc15"; // yellow from previous footer

export function LinkArrow({ className }: LinkArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "h-4 w-4 transition-transform duration-200 ease-out",
        "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
        className
      )}
      style={{ color: ARROW_COLOR }}
      aria-hidden
    >
      <path d="M5 19 19 5" />
      <path d="M9 5h10v10" />
    </svg>
  );
}
