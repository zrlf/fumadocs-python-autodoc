"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { LinkAnnotation } from "../annotation";
import { ArrowDownCircleIcon } from "lucide-react";
import { cn } from "../../../utils";
export const Bases = ({ data, }) => {
    return (_jsxs("div", { children: [_jsx("h5", { className: "fdpy-header relative mb-2", children: "Bases" }), _jsx("div", { className: cn("space-y-6 sm:ml-4", Object.keys(data).length > 1 && "sm:columns-2"), children: Object.entries(data).map(([parent, members]) => (_jsx(Base, { cls: parent, members: members }, parent))) })] }));
};
const Base = ({ cls, members, className, ...props }) => {
    const [isOpened, setIsOpened] = useState(false);
    return (_jsxs("div", { className: cn("relative border rounded-sm", !isOpened && "cursor-pointer", className), onClick: () => setIsOpened(true), ...props, children: [_jsxs("div", { className: cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-sm text-muted-foreground", "transition-all pointer-events-none backdrop-blur-lg rounded-sm py-2 px-4 border", isOpened && "opacity-0"), children: [cls.split(".").slice(-1), _jsx("span", { className: "absolute -top-2 -right-2 bg-primary w-6 h-6 flex items-center justify-center text-primary-foreground text-xs rounded-full", children: members.length })] }), _jsx("div", { className: cn("overflow-auto max-h-96 transition-all", !isOpened &&
                    "min-h-20 max-h-20 overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-20 after:bg-linear-to-t after:from-background after:to-transparent"), children: _jsx("ul", { className: cn("space-y-0 my-2 overflow-auto list-inside"), children: members.map(({ kind, path }) => (_jsx("li", { className: "my-0", children: _jsx(LinkAnnotation, { children: path + (kind == "function" ? "()" : "") }) }, path))) }) }), _jsx("button", { onClick: (e) => {
                    e.stopPropagation();
                    setIsOpened(!isOpened);
                }, className: cn("text-muted-foreground", "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10"), children: _jsx(ArrowDownCircleIcon, { strokeWidth: "1", className: cn("inline transition-all bg-background", isOpened ? "rotate-180" : "rotate-0"), size: 24 }) })] }));
};
