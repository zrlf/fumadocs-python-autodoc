import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "fumadocs-ui/components/card";
import { Code } from "../Code";
import Markdown, { renderMarkdown } from "./markdown";
import { Callout } from "fumadocs-ui/components/callout";
const resolveAdmonitionType = (type) => {
    switch (type) {
        case "note":
            return "info";
        case "info":
            return "info";
        case "warn":
        case "warning":
            return "warn";
        case "tip":
            return "tip";
        case "error":
        case "caution":
        case "danger":
            return "error";
        default:
            return type;
    }
};
export const DocstringSections = ({ sections, }) => {
    function getComponent(section, key) {
        switch (section.kind) {
            case "text":
                return _jsx(Markdown, { input: section.value }, key);
            case "code":
                return _jsx("pre", { children: section.value }, key);
            case "admonition":
                const type = resolveAdmonitionType(section.value.annotation.toLowerCase());
                const infoAnnotations = ["note", "info", "warn", "tip", "error"];
                const parsedContent = renderMarkdown(section.value.description);
                if (type === "notes") {
                    return (_jsxs("div", { children: [_jsx("h5", { children: "Notes" }), _jsx("div", { className: "ml-4 [&_p]:my-2", children: renderMarkdown(section.value.description) })] }, key));
                }
                if (infoAnnotations.includes(type)) {
                    return (_jsx(Callout, { type: type, title: section.title, children: parsedContent }, key));
                }
                return (_jsx(Card, { title: section.title, children: parsedContent }, key));
            case "examples":
                const examples = section.value;
                return (_jsxs("div", { children: [_jsx("h5", { children: "Examples:" }), _jsx("div", { className: "ml-4", children: examples.map(([_kind, value], i) => (_jsx(Code, { code: value, className: "my-2 py-2 **:py-0" }, i))) })] }, key));
            default:
                return null;
        }
    }
    return (_jsx("div", { className: "last:mb-4", children: sections.map((section, i) => getComponent(section, i)) }));
};
