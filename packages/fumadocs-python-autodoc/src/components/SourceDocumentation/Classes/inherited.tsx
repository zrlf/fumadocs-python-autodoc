import { ComponentProps } from "react";
import { cn } from "@/utils";
import { ClassInterface } from "../types";
import { BaseClient } from "./inheritedClient";
import { LinkAnnotation } from "@/components";

export const Bases = ({
  data,
}: {
  data: ClassInterface["inherited_members"];
}) => {
  return (
    <div>
      <h5 className="fdpy-header relative mb-2">Bases</h5>
      <div
        className={cn(
          "space-y-6 sm:ml-4",
          Object.keys(data).length > 1 && "sm:columns-2",
        )}
      >
        {Object.entries(data).map(([parent, members]) => (
          <Base key={parent} cls={parent} members={members} />
        ))}
      </div>
    </div>
  );
};

export function Base({
  cls,
  members,
  className,
  ...props
}: {
  cls: string;
  members: ClassInterface["inherited_members"][string];
} & ComponentProps<"div">) {
  const baseMembers = (
    <ul className={cn("space-y-0 my-2 overflow-auto list-inside")}>
      {members.map(({ kind, path }) => (
        <li key={path} className="my-0">
          <LinkAnnotation>
            {path + (kind == "function" ? "()" : "")}
          </LinkAnnotation>
        </li>
      ))}
    </ul>
  );

  return (
    <BaseClient
      cls={cls}
      baseMembers={baseMembers}
      className={className}
      length={members.length}
      {...props}
    />
  );
}
