import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { ReactNode } from "react";
import { CustomSource } from "@/source/types";
import { BundledTheme, CodeToHastOptions, BundledLanguage } from "shiki";

export function AutoDocLayout({
  sources,
  shikiConfig,
  slug,
  children,
  ...baseOptions
}: {
  sources: { [key: string]: CustomSource };
  shikiConfig?: CodeToHastOptions<BundledLanguage, BundledTheme>;
  slug?: string[];
  children: ReactNode;
} & BaseLayoutProps) {
  const firstSlug = slug?.[0];

  const source = Object.values(sources).find((source) => {
    return source.baseUrl === firstSlug;
  });

  if (!source) {
    return null;
  }

  // I manually add a separator to the page tree
  const treeChildren = source.pageTree.children;

  const modifiedTreeChildren: [] = [];

  for (const child of treeChildren) {
    const isRoot = child.name?.toString().startsWith(source.pkgName);

    if (isRoot) {
      child.name = child.name?.toString().split("@")[0];

      // @ts-expect-error
      modifiedTreeChildren.push({
        type: "separator",
        // name: `Version: ${version?.replaceAll('\'', '')}`,
        name: (
          <span>
            Version:{" "}
            <code className="bg-muted p-1 rounded-sm border">
              {// Cut off the post version number
              source.version
                ?.replaceAll("'", "")
                .split(".", 3)
                .slice(0, 3)
                .join(".")}
            </code>
          </span>
        ),
      });
      // @ts-expect-error
      modifiedTreeChildren.push(child);
      // @ts-expect-error
      modifiedTreeChildren.push({
        type: "separator",
        name: "Modules",
      });
    } else {
      // @ts-expect-error
      modifiedTreeChildren.push(child);
    }
  }
  const newPageTree = { name: source.pkgName, children: modifiedTreeChildren };

  return (
    <DocsLayout
      containerProps={{
        ...source.options,
        className: `route-fumapy ${source.options?.className || ""}`,
      }}
      tree={newPageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
