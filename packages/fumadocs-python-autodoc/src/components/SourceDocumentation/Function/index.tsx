import { FunctionInterface, ReturnInterface } from "../types";
import Markdown from "@/components/Markdown/markdown";
import { Code } from "@/components/Code";
import { Arguments } from "../ArgumentList";
import { LinkAnnotation } from "../annotation";
import { DocstringSections } from "@/components/Markdown/DocstringSections";
import MethodHeader from "../Classes/MethodHeader";

export const Functions = ({ data }: { data: FunctionInterface[] }) => {
  return (
    <div className="space-y-14">
      {data.map((func) => {
        return <Function key={func.name} data={func} />;
      })}
    </div>
  );
};

export const Function = ({ data }: { data: FunctionInterface }) => {
  const sourceCode = <Code code={data.source} className="my-0" />;
  const signature = (
    <Code
      code={data.signature as string}
      inline
      noBackground
      className="whitespace-pre-wrap text-wrap"
    />
  );

  const header = (
    <div className="my-2">
      <a
        href={`#${data.name}`}
        className="not-prose scroll-mt-28"
        id={data.name}
      >
        <span className="font-bold">{data.name}</span>
      </a>

      <span className="leading-relaxed italic">{signature}</span>
    </div>
  );

  return (
    <div>
      <MethodHeader
        code={sourceCode}
        header={header}
        className="fdpy-method-standalone"
      />

      <div className="sm:ml-4 space-y-6">
        {data.description && <Markdown input={data.description} />}
        <Arguments data={data.parameters} />
        {data.returns &&
          (data.returns.annotation || data.returns.description) && (
            <Returns data={data.returns} />
          )}

        {data.docstring.length > 0 && (
          <>
            {/* <div className="w-full h-px bg-border"></div> */}
            <DocstringSections sections={data.docstring} />
          </>
        )}
      </div>
    </div>
  );
};

export const Returns = ({ data }: { data: ReturnInterface }) => {
  return (
    <div>
      <h5 className="fdpy-header">Returns</h5>
      <div className="ml-4 mb-6">
        <LinkAnnotation children={data.annotation} />
        <span className="ml-2">{data.description}</span>
      </div>
    </div>
  );
};
