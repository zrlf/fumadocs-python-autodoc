import { BundledTheme, CodeToHastOptions, BundledLanguage } from "shiki";
export declare function setShikiConfigContext(shikiConfig: CodeToHastOptions<BundledLanguage, BundledTheme> | undefined): void;
export declare function Code({ code, inline, noBackground, link, handleNewLine, className, }: {
    code: string;
    inline?: boolean;
    noBackground?: boolean;
    link?: boolean;
    handleNewLine?: boolean;
    className?: string;
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map