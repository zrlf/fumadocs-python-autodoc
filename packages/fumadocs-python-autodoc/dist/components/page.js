import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Module } from "./SourceDocumentation/module";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
function makePage(sources) {
    async function Page(props) {
        const params = await props.params;
        const source = Object.values(sources).find((source) => {
            return params.slug ? source.baseUrl === params.slug[0] : false;
        });
        if (!source)
            return notFound();
        const page = source.getPage(params.slug?.slice(1));
        if (!page)
            return notFound();
        const sourceUrl = source.gitUrl +
            "/" +
            (page.data.slug.at(-1) === "index" || page.data.slug.length === 0
                ? page.data.slug.slice(0, -1).join("/")
                : page.data.slug.join("/") + ".py");
        return (_jsxs(DocsPage, { toc: page.data.toc, tableOfContent: { style: "clerk", single: false }, breadcrumb: { full: true, includeRoot: true, includePage: true }, children: [_jsx(DocsTitle, { className: "w-full break-words text-2xl", children: page.data.data?.path || page.data.title }), _jsxs("div", { className: "text-muted-foreground", children: ["Source:", " ", _jsx("a", { href: sourceUrl, target: "_blank", className: "underline decoration-primary text-sm", children: sourceUrl })] }), _jsx(DocsBody, { className: "overflow-x-auto md:overflow-x-visible", children: _jsx(Module, { data: page.data.data, source: source }) })] }));
    }
    async function generateStaticParams() {
        const res = Object.values(sources).flatMap((source) => source
            .generateParams()
            .map(({ slug }) => ({ slug: [source.baseUrl, ...slug] })));
        return res;
    }
    async function generateMetadata(props) {
        const params = await props.params;
        const source = Object.values(sources).find((source) => {
            return params.slug ? source.baseUrl === params.slug[0] : false;
        });
        const page = source?.getPage(params.slug);
        return {
            title: page?.data.title,
            description: page?.data.description,
        };
    }
    return {
        Page,
        generateStaticParams,
        generateMetadata,
    };
}
export { makePage };
