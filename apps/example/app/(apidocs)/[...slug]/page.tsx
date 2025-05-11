import { autodocSources } from "@/lib/autodocSources";
import { makePage } from "fumadocs-python-autodoc/components";

const { Page, generateStaticParams, generateMetadata } =
  makePage(autodocSources);

export default Page;
export { generateStaticParams, generateMetadata };
