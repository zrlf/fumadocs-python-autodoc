import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../utils";
import { BaseClient } from "./inheritedClient";
import { LinkAnnotation } from "../../../components";
export const Bases = ({ data, }) => {
    return (_jsxs("div", { children: [_jsx("h5", { className: "fdpy-header relative mb-2", children: "Bases" }), _jsx("div", { className: cn("space-y-6 sm:ml-4", Object.keys(data).length > 1 && "sm:columns-2"), children: Object.entries(data).map(([parent, members]) => (_jsx(Base, { cls: parent, members: members }, parent))) })] }));
};
export function Base({ cls, members, className, ...props }) {
    const baseMembers = (_jsx("ul", { className: cn("space-y-0 my-2 overflow-auto list-inside"), children: members.map(({ kind, path }) => (_jsx("li", { className: "my-0", children: _jsx(LinkAnnotation, { children: path + (kind == "function" ? "()" : "") }) }, path))) }));
    return (_jsx(BaseClient, { cls: cls, baseMembers: baseMembers, className: className, length: members.length, ...props }));
}
