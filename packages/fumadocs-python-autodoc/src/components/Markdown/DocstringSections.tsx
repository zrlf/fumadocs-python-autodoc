import { Card } from "fumadocs-ui/components/card";
import { Code } from "../Code";
import { DocstringSection } from "../SourceDocumentation/types";
import Markdown, { renderMarkdown } from "./markdown";
import { CalloutProps } from "../callout";
import { Callout } from "fumadocs-ui/components/callout";

const resolveAdmonitionType = (type: string) => {
  switch (type) {
    case "note":
      return "info";
    case "info":
      return "info";
    case "warn":
    case "warning":
      return "warn";
    case "tip":
      return "tip";
    case "error":
    case "caution":
    case "danger":
      return "error";
    default:
      return type;
  }
};

export const DocstringSections = ({
  sections,
}: {
  sections: DocstringSection[];
}) => {
  function getComponent(section: DocstringSection, key: string | number) {
    switch (section.kind) {
      case "text":
        return <Markdown input={section.value} key={key} />;

      case "code":
        return <pre key={key}>{section.value}</pre>;

      case "admonition":
        const type = resolveAdmonitionType(
          section.value.annotation.toLowerCase(),
        );
        const infoAnnotations = ["note", "info", "warn", "tip", "error"];
        const parsedContent = renderMarkdown(section.value.description);

        if (type === "notes") {
          return (
            <div key={key}>
              <h5>Notes</h5>
              <div className="ml-4 [&_p]:my-2">
                {renderMarkdown(section.value.description)}
              </div>
            </div>
          );
        }

        if (infoAnnotations.includes(type)) {
          return (
            <Callout
              key={key}
              type={type as CalloutProps["type"]}
              title={section.title}
            >
              {parsedContent}
            </Callout>
          );
        }
        return (
          <Card key={key} title={section.title}>
            {parsedContent}
          </Card>
        );

      case "examples":
        const examples = section.value;
        return (
          <div key={key}>
            <h5>Examples:</h5>
            <div className="ml-4">
              {examples.map(([_kind, value]: [any, any], i: any) => (
                <Code key={i} code={value} className="my-2 py-2 **:py-0" />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  }
  return (
    <div className="last:mb-4">
      {sections.map((section, i) => getComponent(section, i))}
    </div>
  );
};
