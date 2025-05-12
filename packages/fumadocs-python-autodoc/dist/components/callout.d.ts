import { type HTMLAttributes, type ReactNode } from "react";
export type CalloutProps = Omit<HTMLAttributes<HTMLDivElement>, "title" | "type" | "icon"> & {
    title?: ReactNode;
    /**
     * @defaultValue info
     */
    type?: "info" | "warn" | "error";
    /**
     * Force an icon
     */
    icon?: ReactNode;
};
export declare const Callout: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "title" | "type" | "icon"> & {
    title?: ReactNode;
    /**
     * @defaultValue info
     */
    type?: "info" | "warn" | "error";
    /**
     * Force an icon
     */
    icon?: ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=callout.d.ts.map