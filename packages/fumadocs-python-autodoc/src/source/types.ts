import { BundledTheme, CodeToHastOptions, BundledLanguage } from "shiki";
import { LoaderOutput, Source } from "fumadocs-core/source";
import { TOCItemType } from "fumadocs-core/server";
import { StructuredData } from "fumadocs-core/mdx-plugins";
import { ModuleInterface } from "../schema";

interface PkgConfig {
  baseUrl: string;
  title: string;
  pkgName: string;
  options?: Record<string, any>;
  sortClassMethods?: boolean;
  gitUrl?: string;
  excludeModules?: string[];
}

interface Config {
  shiki?: CodeToHastOptions<BundledLanguage, BundledTheme>;
  jsonPath: string;
  sources: {
    [key: string]: PkgConfig;
  };
}

interface Page {
  slug: string[];
  title: string;
  path: string;
  description?: string;
  structuredData: StructuredData;
  toc?: TOCItemType[];
  data?: ModuleInterface;
}

type AutoDocSourceConfig = {
  metaData: { title: string; pages: string[] };
  pageData: Page;
};

type AutoDocSource = Source<AutoDocSourceConfig>;

type CustomSource = LoaderOutput<{
  source: AutoDocSourceConfig;
  i18n: false;
}> &
  PkgConfig & {
    allSlugs: string[][];
    version: string | undefined;
  };

export type {
  PkgConfig,
  Config,
  Page,
  AutoDocSource,
  AutoDocSourceConfig,
  CustomSource,
};
