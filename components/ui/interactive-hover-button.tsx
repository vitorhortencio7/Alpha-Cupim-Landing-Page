
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, icon, ...props }, ref) => {
  const content = (
    <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 shrink-0" />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.onClick}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 p-4 px-8 text-sm sm:text-base text-center font-black text-white shadow-lg cursor-pointer whitespace-nowrap",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 p-4 px-8 text-sm sm:text-base text-center font-bold text-white shadow-lg cursor-pointer whitespace-nowrap",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

