import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getStructuredData } from "./getStructuredData";
const Separator = ({ title }) => {
    return (_jsxs("div", { children: [_jsx("div", { className: "relative text-foreground font-semibold z-1 mt-0 xl:mt-4", children: title }), _jsx("div", { className: "hidden xl:block absolute inset-0 bg-background" })] }));
};
function createTOC(module) {
    const headers = [];
    if (module.attributes.length > 0) {
        headers.push({
            title: _jsx(Separator, { title: "Attributes" }),
            depth: 2,
            url: "#attributes",
        });
    }
    if (Object.keys(module.functions).length > 0) {
        headers.push({
            title: _jsx(Separator, { title: "Functions" }),
            depth: 2,
            url: "#functions",
        });
        Object.values(module.functions).forEach((func) => {
            headers.push({
                title: _jsx("div", { className: "toc-func", children: func.name }),
                depth: 2,
                url: `#${func.name}`,
            });
        });
    }
    if (Object.keys(module.classes).length > 0) {
        headers.push({
            title: _jsx(Separator, { title: "Classes" }),
            depth: 2,
            url: "#classes",
        });
        Object.values(module.classes).forEach((cls) => {
            headers.push({
                title: _jsx("div", { className: "toc-class", children: cls.name }),
                depth: 2,
                url: `#${cls.name}`,
            });
            Object.keys(cls.functions).forEach((method) => {
                if (method === "__init__")
                    return;
                headers.push({
                    title: _jsx("div", { className: "toc-meth", children: method }),
                    depth: 3,
                    url: `#${cls.name}.${method}`,
                });
            });
        });
    }
    return headers;
}
export function createCustomSource(data, pkgConfig) {
    const pages = [];
    function traverse(currentData, path) {
        if (path.length > 0 && currentData.name) {
            function addPage(currentData, path) {
                function handlePageNamedIndex(slugIn) {
                    if (slugIn[slugIn.length - 1] === "index") {
                        return [...slugIn.slice(0, -1), "index_"];
                    }
                    else {
                        return Object.keys(currentData.modules).length > 0
                            ? [...slugIn, "index"]
                            : slugIn;
                    }
                }
                const slug = handlePageNamedIndex(path);
                pages.push({
                    slug,
                    title: currentData.name,
                    path: slug.join("/"),
                    description: currentData.description?.split("\n\n")[0],
                    toc: createTOC(currentData),
                    structuredData: getStructuredData(currentData),
                    data: currentData,
                });
            }
            if (!pkgConfig.excludeModules ||
                !pkgConfig.excludeModules.includes(currentData.path))
                addPage(currentData, path);
        }
        else {
            // We're at the root __init__ module
            const version = `@${data.version}`;
            const title = currentData.name + version;
            pages.push({
                slug: path,
                title: title,
                path: path.join("/"),
                description: currentData.description || "",
                toc: createTOC(currentData),
                structuredData: getStructuredData(currentData),
                data: currentData,
            });
        }
        Object.values(currentData.modules)?.forEach((submodule) => {
            traverse(submodule, [...path, submodule.name]);
        });
    }
    traverse(data, []);
    const files = pages.map((page) => {
        return {
            path: page.path,
            type: "page",
            data: page,
        };
    });
    return {
        files,
    };
}
