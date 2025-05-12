import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { ReactNode } from "react";
import { CustomSource } from "../source/types";
import { BundledTheme, CodeToHastOptions, BundledLanguage } from "shiki";
export declare function AutoDocLayout({ sources, shikiConfig, slug, children, ...baseOptions }: {
    sources: {
        [key: string]: CustomSource;
    };
    shikiConfig?: CodeToHastOptions<BundledLanguage, BundledTheme>;
    slug?: string[];
    children: ReactNode;
} & BaseLayoutProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=layout.d.ts.map