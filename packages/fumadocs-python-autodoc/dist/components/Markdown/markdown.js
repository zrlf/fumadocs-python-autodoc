import { jsx as _jsx } from "react/jsx-runtime";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as prod from "react/jsx-runtime";
import { unified } from "unified";
import { Code } from "../Code";
import { LinkAnnotation } from "../SourceDocumentation/annotation";
import { remarkGfm } from "fumadocs-core/mdx-plugins";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import calloutPlugin from "./plugins/callout";
import inlineCodeLinkPlugin from "./plugins/inline-code";
import remarkPythonPrompt from "./plugins/remark-python-prompt";
export default function Markdown({ input }) {
    return _jsx("div", { className: "last:mb-4", children: renderMarkdown(input) });
}
export function renderMarkdown(input) {
    const processor = unified()
        .use(remarkParse) // Parses the markdown into a syntax tree
        .use(inlineCodeLinkPlugin) // Add crosslinks to bamboost members
        .use(remarkPythonPrompt.plugin) // Parse python prompt syntax to code blocks
        .use(calloutPlugin) // Parse google style callout syntax to callout components
        .use(remarkGfm) // Adds support for GFM (GitHub Flavored Markdown)
        .use(remarkRehype) // Converts the markdown syntax tree to HTML syntax tree
        .use(rehypeReact, {
        Fragment: prod.Fragment,
        jsx: prod.jsx,
        jsxs: prod.jsxs,
        components: {
            ...defaultMdxComponents,
            LinkAnnotation: (props) => _jsx(LinkAnnotation, { ...props }),
            Code: (props) => _jsx(Code, { ...props }),
        },
    });
    const preprocessedInput = remarkPythonPrompt.preprocess(input);
    return processor.processSync(preprocessedInput).result;
}
