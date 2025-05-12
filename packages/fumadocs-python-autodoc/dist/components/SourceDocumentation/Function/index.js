import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Markdown from "../../../components/Markdown/markdown";
import { Code } from "../../../components/Code";
import { Arguments } from "../ArgumentList";
import { LinkAnnotation } from "../annotation";
import { DocstringSections } from "../../../components/Markdown/DocstringSections";
import MethodHeader from "../Classes/MethodHeader";
export const Functions = ({ data }) => {
    return (_jsx("div", { className: "space-y-14", children: data.map((func) => {
            return _jsx(Function, { data: func }, func.name);
        }) }));
};
export const Function = ({ data }) => {
    const sourceCode = _jsx(Code, { code: data.source, className: "my-0" });
    const signature = (_jsx(Code, { code: data.signature, inline: true, noBackground: true, className: "whitespace-pre-wrap text-wrap" }));
    const header = (_jsxs("div", { className: "my-2", children: [_jsx("a", { href: `#${data.name}`, className: "not-prose scroll-mt-28", id: data.name, children: _jsx("span", { className: "font-bold", children: data.name }) }), _jsx("span", { className: "leading-relaxed italic", children: signature })] }));
    return (_jsxs("div", { children: [_jsx(MethodHeader, { code: sourceCode, header: header, className: "fdpy-method-standalone" }), _jsxs("div", { className: "sm:ml-4 space-y-6", children: [data.description && _jsx(Markdown, { input: data.description }), _jsx(Arguments, { data: data.parameters }), data.returns &&
                        (data.returns.annotation || data.returns.description) && (_jsx(Returns, { data: data.returns })), data.docstring.length > 0 && (_jsx(_Fragment, { children: _jsx(DocstringSections, { sections: data.docstring }) }))] })] }));
};
export const Returns = ({ data }) => {
    return (_jsxs("div", { children: [_jsx("h5", { className: "fdpy-header", children: "Returns" }), _jsxs("div", { className: "ml-4 mb-6", children: [_jsx(LinkAnnotation, { children: data.annotation }), _jsx("span", { className: "ml-2", children: data.description })] })] }));
};
