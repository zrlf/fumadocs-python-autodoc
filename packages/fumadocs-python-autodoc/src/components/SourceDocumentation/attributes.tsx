import { cn } from "@/utils";
import { Code } from "../Code";
import { LinkAnnotation } from "./annotation";
import { AttributeInterface } from "./types";
import { DocstringSections } from "../Markdown/DocstringSections";

export const Attributes = ({
  data,
  parent,
  noTitle = false,
}: {
  data: AttributeInterface[];
  parent?: string;
  noTitle?: boolean;
}) => {
  return (
    <div>
      {!noTitle && <h5 className="fdpy-header">Attributes:</h5>}
      <ul className={cn("mt-0 [&_p]:my-2", noTitle ? "ml-0 px-0 list-none" : "ml-4")}>
        {data.map((property) => (
          <li
            key={property.name}
            id={parent ? `${parent}.${property.name}` : property.name}
            className="scroll-mt-28"
          >
            <div className="flex flex-wrap items-center">
              <span className="font-semibold">{property.name}</span>
              {property.annotation && (
                <span className="ml-2">
                  <span className="font-bold mr-2">:</span>
                  <LinkAnnotation children={property.annotation} />
                </span>
              )}
              {property.value && (
                <>
                  <span className="ml-2">=</span>
                  <span className="ml-2">
                    <Code code={property.value} inline />
                  </span>
                </>
              )}
            </div>
            {property.description && (
              <div className="sm:ml-4">
                <DocstringSections sections={property.description} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
