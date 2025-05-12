import { CustomSource } from "../source";
import { BundledTheme, CodeToHastOptions, BundledLanguage } from "shiki";
export declare function setSourcesContext(sources: {
    [key: string]: CustomSource;
}): void;
export declare function getSourcesContext(): {
    [key: string]: CustomSource;
};
export declare function setShikiConfigContext(shikiConfig: CodeToHastOptions<BundledLanguage, BundledTheme> | undefined): void;
export declare function getShikiConfigContext(): CodeToHastOptions<BundledLanguage, BundledTheme> | undefined;
//# sourceMappingURL=index.d.ts.map