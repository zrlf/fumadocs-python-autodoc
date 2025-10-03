import { ComponentProps } from "react";
import { ClassInterface } from "../types";
export declare const Bases: ({ data, }: {
    data: ClassInterface["inherited_members"];
}) => import("react/jsx-runtime").JSX.Element;
export declare function Base({ cls, members, className, ...props }: {
    cls: string;
    members: ClassInterface["inherited_members"][string];
} & ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=inherited.d.ts.map