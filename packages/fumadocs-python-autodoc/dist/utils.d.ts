import { ModuleInterface } from "./components/SourceDocumentation/types";
import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
/**
 * Retrieves all possible slugs from a nested structure.
 *
 * @param {ModuleInterface} data - The root module containing the nested data structure.
 * @returns {string[][]} An array of arrays, where each inner array represents a possible slug path.
 */
export declare function getAllSlugs(data: ModuleInterface): string[][];
//# sourceMappingURL=utils.d.ts.map