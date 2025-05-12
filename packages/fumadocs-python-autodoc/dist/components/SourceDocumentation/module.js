import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Cards } from "fumadocs-ui/components/card";
import { TableOfContents } from "lucide-react";
import { DocstringSections } from "../Markdown/DocstringSections";
import Markdown from "../Markdown/markdown";
import { Classes } from "./Classes";
import { Functions } from "./Function";
import { Attributes } from "./attributes";
export const Module = ({ data, source }) => {
    let cards = null;
    if (Object.keys(data.modules).length > 0) {
        cards = (_jsx(Cards, { children: Object.values(data.modules).map((module) => {
                if (source.excludeModules?.includes(module.path))
                    return null;
                const baseUrl = source.baseUrl;
                const sanitizedSlug = module.path
                    .split(".")
                    .slice(1)
                    .map((slug) => slug.replace("index", "index_"));
                return (_jsx(Card, { title: module.name, description: module.description?.split("\n\n")[0], href: `${baseUrl}/${sanitizedSlug.join("/")}` }, module.name));
            }) }));
    }
    return (_jsxs("div", { children: [data.description && _jsx(Markdown, { input: data.description }), data.docstring && _jsx(DocstringSections, { sections: data.docstring }), _jsx("div", { className: "mt-4", children: cards }), data.attributes.length > 0 && (_jsxs(_Fragment, { children: [_jsxs("h2", { className: "fdpy-divider", id: "attributes", children: [_jsx(TableOfContents, {}), "Attributes"] }), _jsx(Attributes, { data: data.attributes, noTitle: true })] })), Object.keys(data.functions).length > 0 && (_jsxs(_Fragment, { children: [_jsxs("h2", { className: "fdpy-divider", id: "functions", children: [_jsx(TableOfContents, {}), "Functions"] }), _jsx(Functions, { data: Object.values(data.functions) })] })), Object.values(data.classes).length > 0 && (_jsxs(_Fragment, { children: [_jsxs("h2", { className: "fdpy-divider", id: "classes", children: [_jsx(TableOfContents, {}), "Classes"] }), _jsx(Classes, { data: Object.values(data.classes) })] }))] }));
};
