import { jsx as _jsx } from "react/jsx-runtime";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { cn } from "../../utils";
export const components = (inline, noBackground = false, className) => {
    if (inline) {
        return {
            pre: ({ ref: _ref, className: _className, style: _style, ...props }) => {
                const style = {
                    ..._style,
                    backgroundColor: undefined,
                };
                return (_jsx("code", { className: cn(_className, className, noBackground &&
                        "bg-transparent! [&_span]:bg-transparent! border-none!", "inline-code"), style: style, ...props }));
            },
            code: (props) => _jsx("span", { ...props }),
        };
    }
    else {
        return {
            pre: ({ ref: _ref, className: _className, style: _style, ...props }) => {
                return (_jsx(CodeBlock, { className: cn(_className, className), ...props, children: _jsx(Pre, { children: props.children }) }));
            },
        };
    }
};
