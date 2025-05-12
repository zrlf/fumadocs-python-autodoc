import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
export function AutoDocLayout({ sources, shikiConfig, slug, children, ...baseOptions }) {
    const firstSlug = slug?.[0];
    const source = Object.values(sources).find((source) => {
        return source.baseUrl === firstSlug;
    });
    if (!source) {
        return null;
    }
    // I manually add a separator to the page tree
    const treeChildren = source.pageTree.children;
    const modifiedTreeChildren = [];
    for (const child of treeChildren) {
        const isRoot = child.name?.toString().startsWith("bamboost");
        if (isRoot) {
            child.name = child.name?.toString().split("@")[0];
            // @ts-expect-error
            modifiedTreeChildren.push({
                type: "separator",
                // name: `Version: ${version?.replaceAll('\'', '')}`,
                name: (_jsxs("span", { children: ["Version:", " ", _jsx("code", { className: "bg-muted p-1 rounded-sm border", children: // Cut off the post version number
                            source.version
                                ?.replaceAll("'", "")
                                .split(".", 3)
                                .slice(0, 3)
                                .join(".") })] })),
            });
            // @ts-expect-error
            modifiedTreeChildren.push(child);
            // @ts-expect-error
            modifiedTreeChildren.push({
                type: "separator",
                name: "Modules",
            });
        }
        else {
            // @ts-expect-error
            modifiedTreeChildren.push(child);
        }
    }
    const newPageTree = { name: source.pkgName, children: modifiedTreeChildren };
    return (_jsx(DocsLayout, { containerProps: {
            ...source.options,
            className: `route-fumapy ${source.options?.className || ""}`,
        }, tree: newPageTree, ...baseOptions, children: children }));
}
