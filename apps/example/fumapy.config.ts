import { Config } from "fumadocs-python-autodoc/source";


const config: Config = {
  shiki: {
    lang: "python",
    themes: {
      dark: "vitesse-dark",
      light: "vitesse-light",
    },
  },
  jsonPath: "lib",
  sources: {
    bamboost: {
      baseUrl: "autodoc",
      title: "API Reference",
      pkgName: "bamboost",
      sortClassMethods: true,
      gitUrl: "https://gitlab.com/cmbm-ethz/bamboost/-/blob/next/bamboost",
      excludeModules: ["bamboost._version"],
    },
  },
};

export default config;
