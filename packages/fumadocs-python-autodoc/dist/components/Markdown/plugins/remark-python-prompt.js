import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
// replace >>> with $. Reason: > is used for blockquotes in markdown
const remarkPythonPrompt = {
    preprocess: (input) => {
        return input
            .split("\n")
            .map((line) => {
            if (/^>>> /.test(line)) {
                return line.replace(/^>>> /, "$ ");
            }
            return line;
        })
            .join("\n");
    },
    plugin: () => (tree) => {
        visit(tree, "paragraph", (node, index, parent) => {
            const textContent = toString(node).trim();
            // detect triple blockquote
            if (/^\$ /.test(textContent)) {
                // Create a code block node
                const codeNode = {
                    type: "element",
                    data: {
                        hName: "Code",
                        hProperties: {
                            // replace $ with >>>
                            code: textContent.replace(/^\$/gm, ">>>"),
                        },
                    },
                };
                // Replace the blockquote node with the code block node
                parent.children.splice(index, 1, codeNode);
            }
        });
    },
};
export default remarkPythonPrompt;
