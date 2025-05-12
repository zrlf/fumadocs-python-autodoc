import { loader } from "fumadocs-core/source";
import { getAllSlugs } from "../utils";
import { createCustomSource } from "./createCustomSource";
import { join } from "path";
import { readFileSync } from "fs";
// Recursive function to find and sort the methods of a class
// @ts-ignore
const transformClasses = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(transformClasses);
    }
    else if (typeof obj === "object" && obj !== null) {
        if (obj.functions) {
            // Sort the members of the class (assuming members is an array)
            obj.functions = Object.fromEntries(Object.entries(obj.functions).sort(([, a], [, b]) => {
                // @ts-ignore
                if (a.name.startsWith("__"))
                    return -1;
                // @ts-ignore
                if (b.name.startsWith("__"))
                    return 1;
                // @ts-ignore
                if (a.name.startsWith("_"))
                    return 1;
                // @ts-ignore
                if (b.name.startsWith("_"))
                    return -1;
                return 0;
            }));
        }
        return Object.fromEntries(
        // @ts-ignore
        Object.entries(obj).map(([key, value]) => [key, transformClasses(value)]));
    }
    return obj;
};
function getSources(config) {
    const sources = Object.fromEntries(Object.entries(config.sources).map(([key, source]) => {
        const filepath = join(config.jsonPath, `${source.pkgName}.json`);
        const data = JSON.parse(readFileSync(filepath, "utf-8"));
        // Apply the transformation to the entire data structure
        if (source.sortClassMethods) {
            transformClasses(data);
        }
        const newSource = {
            ...loader({
                baseUrl: source.baseUrl,
                source: createCustomSource(data, source),
            }),
            allSlugs: getAllSlugs(data),
            version: data.version,
            ...source,
        };
        return [key, newSource];
    }));
    return sources;
}
export { getSources };
