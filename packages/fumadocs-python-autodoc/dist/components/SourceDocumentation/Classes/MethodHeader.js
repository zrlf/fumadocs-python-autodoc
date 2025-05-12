"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "../../../utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export default function MethodHeader({ code, header, className, }) {
    const [sourceCodeVisible, setSourceCodeVisible] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(className, "function-header", "rounded-xl"), children: [_jsxs("div", { className: cn("flex flex-col sm:flex-row sm:justify-between sm:items-center", "px-4 mb-0 pb-0"), children: [header, code && (_jsxs("button", { className: "text-xs border px-2 mb-2 sm:mb-0 py-1 rounded-sm size-fit text-muted-foreground text-nowrap hover:bg-secondary-foreground/5 transition-colors", onClick: () => setSourceCodeVisible(!sourceCodeVisible), children: ["Source code", " ", _jsx(ChevronDown, { className: "inline transition-all", size: 16, style: {
                                        rotate: sourceCodeVisible ? "0deg" : "-90deg",
                                    } })] }))] }), sourceCodeVisible && code] }) }));
}
