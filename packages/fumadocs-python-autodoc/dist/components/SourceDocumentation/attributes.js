import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "../../utils";
import { Code } from "../Code";
import { LinkAnnotation } from "./annotation";
import { DocstringSections } from "../Markdown/DocstringSections";
export const Attributes = ({ data, parent, noTitle = false, }) => {
    return (_jsxs("div", { children: [!noTitle && _jsx("h5", { className: "fdpy-header", children: "Attributes:" }), _jsx("ul", { className: cn("mt-0 [&_p]:my-2", noTitle ? "ml-0 px-0 list-none" : "ml-4"), children: data.map((property) => (_jsxs("li", { id: parent ? `${parent}.${property.name}` : property.name, className: "scroll-mt-28", children: [_jsxs("div", { className: "flex flex-wrap items-center", children: [_jsx("span", { className: "font-semibold", children: property.name }), property.annotation && (_jsxs("span", { className: "ml-2", children: [_jsx("span", { className: "font-bold mr-2", children: ":" }), _jsx(LinkAnnotation, { children: property.annotation })] })), property.value && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ml-2", children: "=" }), _jsx("span", { className: "ml-2", children: _jsx(Code, { code: property.value, inline: true }) })] }))] }), property.description && (_jsx("div", { className: "sm:ml-4", children: _jsx(DocstringSections, { sections: property.description }) }))] }, property.name))) })] }));
};
