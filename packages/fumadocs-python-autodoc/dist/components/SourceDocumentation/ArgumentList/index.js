import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Code } from "../../../components/Code";
import Markdown from "../../../components/Markdown/markdown";
import { DocstringSections } from "../../../components/Markdown/DocstringSections";
export const Arguments = ({ data }) => {
    if (!data)
        return null;
    if (data.length === 0) {
        return null;
    }
    return data.length === 0 ||
        (data.length === 1 && data[0].name === "self") ? null : (_jsxs("div", { children: [_jsx("h5", { className: "fdpy-header", children: "Arguments:" }), _jsx("ul", { className: "ml-4 mt-0", children: data.map(({ name, annotation, description, value }) => name !== "self" && (_jsx("li", { children: _jsx(Argument, { name: name, type: annotation, defaultValue: value, description: description }) }, name))) })] }));
};
const Argument = ({ name, type, defaultValue, description, }) => {
    return (_jsxs("div", { className: "[&_p:not(.not-prose)]:my-2", children: [_jsxs("div", { className: "flex flex-wrap items-center", children: [_jsx("span", { className: "font-bold", children: name }), type && (_jsxs("span", { className: "mx-2", children: [_jsx("span", { className: "font-bold mr-2", children: ":" }), _jsx(Code, { code: type, inline: true, link: true })] })), defaultValue && (_jsxs(_Fragment, { children: [_jsx("span", { children: "=" }), _jsx("span", { className: "mx-2", children: _jsx(Code, { code: defaultValue, inline: true }) })] }))] }), description && (_jsx("div", { className: "sm:ml-4", children: typeof description == "string" ? (_jsx(Markdown, { input: description })) : (_jsx(DocstringSections, { sections: description })) }))] }));
};
