import React, { ComponentProps } from "react";
import { CustomSource } from "../../source/types";
export declare function setSourcesContext(sources: {
    [key: string]: CustomSource;
}): void;
export declare function LinkAnnotation({ children, returnNull, ...props }: {
    children: string | null;
    returnNull?: boolean;
} & ComponentProps<"code">): import("react/jsx-runtime").JSX.Element | null;
/**
 * Parses the input string to extract the slug and remainder based on ALL_SLUGS.
 * @param input - The input string to be parsed.
 * @returns A link or the original input string.
 */
export declare function LinkifyPkg(input: string, markdown: true): string;
export declare function LinkifyPkg(input: string, markdown?: false): React.ReactNode;
//# sourceMappingURL=annotation.d.ts.map