import { Card, Cards } from "fumadocs-ui/components/card";
import { TableOfContents } from "lucide-react";
import { DocstringSections } from "../Markdown/DocstringSections";
import Markdown from "../Markdown/markdown";
import { Classes } from "./Classes";
import { Functions } from "./Function";
import { Attributes } from "./attributes";
import { ModuleInterface } from "./types";
import { CustomSource } from "@/source";

export const Module = ({ data, source }: { data: ModuleInterface, source: CustomSource }) => {
  let cards = null;
  if (Object.keys(data.modules).length > 0) {
    cards = (
      <Cards>
        {Object.values(data.modules).map((module) => {
          if (source.excludeModules?.includes(module.path)) return null;
          const baseUrl = source.baseUrl;
          const sanitizedSlug = module.path
            .split(".")
            .slice(1)
            .map((slug) => slug.replace("index", "index_"));
          return (
            <Card
              key={module.name}
              title={module.name}
              description={module.description?.split("\n\n")[0]}
              href={`${baseUrl}/${sanitizedSlug.join("/")}`}
            />
          );
        })}
      </Cards>
    );
  }

  return (
    <div>
      {data.description && <Markdown input={data.description} />}

      {data.docstring && <DocstringSections sections={data.docstring} />}

      <div className="mt-4">{cards}</div>

      {data.attributes.length > 0 && (
        <>
          <h2 className="fdpy-divider" id="attributes">
            <TableOfContents />
            Attributes
          </h2>
          <Attributes data={data.attributes} noTitle />
        </>
      )}

      {Object.keys(data.functions).length > 0 && (
        <>
          <h2 className="fdpy-divider" id="functions">
            <TableOfContents />
            Functions
          </h2>
          <Functions data={Object.values(data.functions)} />
        </>
      )}

      {Object.values(data.classes).length > 0 && (
        <>
          <h2 className="fdpy-divider" id="classes">
            <TableOfContents />
            Classes
          </h2>
          <Classes data={Object.values(data.classes)} />
        </>
      )}
    </div>
  );
};
