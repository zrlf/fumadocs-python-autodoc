import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Code } from "../../../components/Code";
import { DocstringSections } from "../../../components/Markdown/DocstringSections";
import Markdown from "../../../components/Markdown/markdown";
import { Arguments } from "../../../components/SourceDocumentation/ArgumentList";
import { cn } from "../../../utils";
import { Returns } from "../Function";
import MethodHeader from "./MethodHeader";
export const Method = ({ data, clsName, }) => {
    const code = data.source ? (_jsx(Code, { code: data.source, className: "my-0" })) : null;
    const signature = (_jsx(Code, { code: data.signature, inline: true, noBackground: true, className: "whitespace-pre-line text-wrap" }));
    const id = `${clsName}.${data.name}`;
    const header = (_jsxs("div", { className: "my-2", children: [_jsxs("a", { href: `#${id}`, className: "not-prose scroll-mt-28", id: id, children: [clsName && (_jsx("span", { className: cn("text-muted-foreground/80 text-base font-semibold"), children: clsName })), clsName && data.name && (_jsx("span", { className: "text-muted-foreground/80 mx-0.5", children: "." })), _jsx("span", { className: "font-bold text-foreground", children: data.name })] }), _jsx("span", { className: "leading-relaxed italic", children: signature })] }));
    return (_jsxs("div", { className: "sm:border sm:rounded-xl sm:bg-fd-secondary p-0", children: [_jsx(MethodHeader, { header: header, code: code, className: "max-sm:fdpy-method-standalone" }), _jsx("div", { className: "sm:bg-fd-background sm:rounded-xl sm:border-t sm:p-2", children: _jsxs("div", { className: "sm:ml-4 space-y-6 my-0", children: [data.description && _jsx(Markdown, { input: data.description }), _jsx(Arguments, { data: data.parameters }), data.returns &&
                            (data.returns.annotation || data.returns.description) && (_jsx(Returns, { data: data.returns })), data.docstring.length > 0 && (_jsx(_Fragment, { children: _jsx(DocstringSections, { sections: data.docstring }) }))] }) })] }));
};
export const Constructor = ({ data, clsName, }) => {
    const code = data?.source ? (_jsx(Code, { code: data.source, className: "my-0" })) : null;
    const signature = (_jsx(Code, { className: "whitespace-pre-wrap overflow-x-scroll", code: data?.signature, inline: true, noBackground: true }));
    const id = data ? `${clsName}.${data.name}` : clsName;
    const header = (_jsxs("div", { className: "my-2", children: [_jsx("a", { href: `#${id}`, className: "not-prose text-muted-foreground font-bold", id: id, children: clsName }), _jsx("span", { className: "leading-relaxed italic", children: signature })] }));
    return (_jsx(MethodHeader, { header: header, code: code, className: "fdpy-method-standalone" }));
};
