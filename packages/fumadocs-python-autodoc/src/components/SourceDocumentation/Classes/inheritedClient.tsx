"use client";

import { cn } from "@/utils";
import { JSX, useState } from "react";
import { ArrowDownCircleIcon } from "lucide-react";

export const BaseClient = ({
  cls,
  baseMembers,
  className,
  length = 0,
  ...props
}: {
  cls: string;
  baseMembers: JSX.Element;
  className?: string;
  length?: number;
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={cn(
        "relative border rounded-sm",
        !isOpened && "cursor-pointer",
        className,
      )}
      onClick={() => setIsOpened(true)}
      {...props}
    >
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-muted-foreground",
          "transition-all pointer-events-none backdrop-blur-lg rounded-sm py-2 px-4 border",
          isOpened && "opacity-0",
        )}
      >
        {cls.split(".").slice(-1)}
        <span className="absolute -top-2 -right-2 bg-primary w-6 h-6 flex items-center justify-center text-primary-foreground text-xs rounded-full">
          {length}
        </span>
      </div>

      <div
        className={cn(
          "overflow-auto max-h-96 transition-all",
          !isOpened &&
          "min-h-20 max-h-20 overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-20 after:bg-linear-to-t after:from-background after:to-transparent",
        )}
      >
        {baseMembers}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpened(!isOpened);
        }}
        className={cn(
          "text-muted-foreground",
          "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10",
        )}
      >
        <ArrowDownCircleIcon
          strokeWidth="1"
          className={cn(
            "inline transition-all bg-background",
            isOpened ? "rotate-180" : "rotate-0",
          )}
          size={24}
        />
      </button>
    </div>
  );
};
