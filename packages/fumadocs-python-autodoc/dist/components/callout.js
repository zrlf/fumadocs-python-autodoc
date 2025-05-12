import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils";
import { AlertTriangle, CircleX, Info, Lightbulb } from "lucide-react";
import { forwardRef } from "react";
export const Callout = forwardRef(({ className, children, title, type = "info", icon, ...props }, ref) => {
    const leftBorderColor = true;
    return (_jsxs("div", { ref: ref, className: cn("my-6 flex flex-row gap-2 rounded-lg bg-fd-card p-3 text-sm text-fd-card-foreground shadow-md", leftBorderColor
            ? {
                info: "border-l-blue-500/50 border-l-2!",
                note: "border-l-blue-500/50 border-l-2!",
                tip: "border-l-green-500/50 border-l-2!",
                warn: "border-l-orange-500/50 border-l-2!",
                warning: "border-l-orange-500/50 border-l-2!",
                error: "border-l-red-500/50 border-l-2!",
            }[type]
            : "border", className), ...props, children: [icon ??
                {
                    info: _jsx(Info, { className: "size-5 fill-blue-500 text-fd-card" }),
                    note: _jsx(Info, { className: "size-5 fill-blue-500 text-fd-card" }),
                    tip: _jsx(Lightbulb, { className: "size-5 text-green-500" }),
                    warn: (_jsx(AlertTriangle, { className: "size-5 fill-orange-500 text-fd-card" })),
                    warning: (_jsx(AlertTriangle, { className: "size-5 fill-orange-500 text-fd-card" })),
                    error: _jsx(CircleX, { className: "size-5 fill-red-500 text-fd-card" }),
                }[type], _jsxs("div", { className: "min-w-0 flex-1", children: [title ? _jsx("p", { className: "not-prose mb-2 font-medium", children: title }) : null, _jsx("div", { className: "text-fd-muted-foreground prose-no-margin", children: children })] })] }));
});
Callout.displayName = "Callout";
