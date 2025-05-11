import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps & Partial<DocsLayoutProps> = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        My App
      </>
    ),
  },

  sidebar: {
    banner: (
      <RootToggle
        options={[
          {
            title: "Docs",
            description: "Guides and tutorials",
            url: "/docs",
          },
          {
            title: "Autodoc",
            description: "Autodoc for your pkg",
            url: "/autodoc",
          },
        ]}
      />
    ),
  },
};
