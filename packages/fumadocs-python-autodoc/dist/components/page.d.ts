import type { Metadata } from "next";
import { CustomSource } from "../source";
declare function makePage(sources: {
    [key: string]: CustomSource;
}): {
    Page: (props: {
        params: Promise<{
            slug?: string[];
        }>;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    generateStaticParams: () => Promise<{
        slug: string[];
    }[]>;
    generateMetadata: (props: {
        params: Promise<{
            slug?: string[];
        }>;
    }) => Promise<Metadata>;
};
export { makePage };
//# sourceMappingURL=page.d.ts.map