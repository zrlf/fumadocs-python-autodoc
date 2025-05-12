import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Constructor, Method } from "./method";
import { Attributes } from "../../../components/SourceDocumentation/attributes";
import fuma from "fumadocs-ui/mdx";
import { Bases } from "./inherited";
import Markdown from "../../../components/Markdown/markdown";
import { Arguments } from "../ArgumentList";
import { DocstringSections } from "../../../components/Markdown/DocstringSections";
export const Classes = ({ data }) => {
    return (_jsx("div", { className: "space-y-20", children: data.map((cls) => (_jsx(Class, { data: cls }, cls.name))) }));
};
export const Class = ({ data }) => {
    return (_jsx("div", { className: "space-y-14", children: _jsxs("div", { className: "space-y-12", children: [_jsx(fuma.h2, { id: data.name, className: "class", children: data.name }), data.functions["__init__"] && (_jsx(Constructor, { data: data.functions["__init__"], clsName: data.name })), data.description && _jsx(Markdown, { input: data.description }), data.functions["__init__"]?.parameters && (_jsx(Arguments, { data: data.functions["__init__"].parameters })), data.attributes.length > 0 && (_jsx(Attributes, { data: data.attributes, parent: data.name })), data.docstring && _jsx(DocstringSections, { sections: data.docstring }), Object.keys(data.inherited_members).length > 0 && (_jsx(Bases, { data: data.inherited_members })), _jsx("div", { className: "space-y-20 sm:space-y-12", children: Object.values(data.functions).map((func) => {
                        if (!func)
                            return null;
                        if (func.name === "__init__")
                            return null;
                        return _jsx(Method, { data: func, clsName: data.name }, func.name);
                    }) })] }) }));
};
