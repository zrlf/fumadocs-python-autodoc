import { ReactNode } from "react";
import { AutoDocLayout } from "fumadocs-python-autodoc/components";
import { baseOptions } from "@/app/layout.config";
import { autodocSources } from "@/lib/autodocSources";
import config from "@/fumapy.config";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  const comp = (
    <AutoDocLayout
      sources={autodocSources}
      shikiConfig={config.shiki}
      slug={slug}
      {...baseOptions}
    >
      {children}
    </AutoDocLayout>
  );
  return comp;
}
